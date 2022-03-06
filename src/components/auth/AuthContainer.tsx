import { useFirebaseAuth } from '../../util/usePhoneAuth';
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from 'firebase/auth';
import AuthPresenter from './AuthPresenter';
import { useEffect } from 'react';
import api from '../../util/api';
import { GetResponse } from '../../models/ResponseDto';
import { useRouter } from 'next/router';

const AuthContainer = () => {
    const { app } = useFirebaseAuth();
    const auth = getAuth(app);
    const router = useRouter();

    auth.languageCode = 'ko';
    const sendAuthCode = async (phone: string) => {
        if (!phone) return false;
        const response = await api.get<GetResponse>('/users/checkphone', {
            params: { phone },
        });

        if (response.status === 200) {
            if (!response.data.payload) {
                const internationalPhone = phone.slice(1);
                signInWithPhoneNumber(
                    auth,
                    '+82' + internationalPhone,
                    window.recaptchaVerifier,
                )
                    .then((confirmationResult) => {
                        window.confirmationResult = confirmationResult;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                return true;
            } else {
                alert('이미 참여한 사용자 입니다.');
                return false;
            }
        }
        return false;
    };

    const confirmAuthCode = (data: { [x: string]: string }) => {
        window.confirmationResult
            .confirm(data['authNumber'])
            .then((result: any) => {
                alert('인증이 완료되었습니다.');
                if (result.user.accessToken) {
                    // 클라이언트 API
                    api({
                        method: 'post',
                        baseURL: router.basePath,
                        url: '/api/auth',
                        data: { auth: result.user.accessToken },
                    });

                    api({
                        method: 'post',
                        url: '/tokens',
                        data: {
                            token: result.user.accessToken,
                        },
                    });

                    router.replace('/survey');
                }
            })
            .catch((error: any) => {
                if (error.code === 'auth/invalid-verification-code') {
                    alert('인증번호가 유효하지 않습니다.');
                } else if (error.code === 'auth/session-expired') {
                    alert('인증번호가 만료되었습니다.');
                } else {
                    alert('인증을 실패하였습니다.');
                }
            });
    };

    useEffect(() => {
        if (!window.recaptchaVerifier && auth) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                'sign-in-button',
                {
                    size: 'invisible',
                    callback: (response: any) => {
                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                        console.log('response', response);
                    },
                },
                auth,
            );
        }
    }, [auth]);

    return (
        <AuthPresenter
            confirmAuthCode={confirmAuthCode}
            sendAuthCode={sendAuthCode}
        />
    );
};

export default AuthContainer;
