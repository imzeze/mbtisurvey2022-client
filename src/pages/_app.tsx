import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyle from '../../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={GlobalStyle} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
