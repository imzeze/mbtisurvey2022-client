import { useFirebaseAuth } from '../../util/usePhoneAuth';
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from 'firebase/auth';
import AuthPresenter from './AuthPresenter';

const AuthContainer = () => {
    const { app } = useFirebaseAuth();
    const auth = getAuth(app);

    const sendAuthCode = (phone: string) => {
        const appVerifier = new RecaptchaVerifier(
            'sign-in-button',
            {
                size: 'invisible',
            },
            auth,
        );

        window.recaptchaVerifier = appVerifier;
        auth.languageCode = 'ko';
        signInWithPhoneNumber(auth, '+82' + phone, window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const confirmAuthCode = (data: { [x: string]: string }) => {
        window.confirmationResult
            .confirm(data['authNumber'])
            .then((result: any) => {
                alert('인증이 완료되었습니다.');
                console.log(result.user, result);
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

    return (
        <AuthPresenter
            confirmAuthCode={confirmAuthCode}
            sendAuthCode={sendAuthCode}
        />
    );
};

export default AuthContainer;
