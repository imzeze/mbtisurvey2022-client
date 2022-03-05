import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyle from '../../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';

declare global {
    interface Window {
        recaptchaVerifier?: any;
        confirmationResult: any;
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Global styles={GlobalStyle} />
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
