import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyle from '../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

declare global {
    interface Window {
        recaptchaVerifier?: any;
        confirmationResult: any;
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>MBTI SURVEY 2022 : 대국민 MBTI 조사</title>
            </Head>
            <Global styles={GlobalStyle} />
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
