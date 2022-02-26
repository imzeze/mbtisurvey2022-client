import { css } from '@emotion/react';

const GlobalStyle = css`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        src: url('fonts/Pretendard-Bold.woff2') format('woff2');
        font-display: fallback;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        src: url('fonts/Pretendard-Medium.woff2') format('woff2');
        font-display: fallback;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        src: url('fonts/Pretendard-Regular.woff2') format('woff2');
        font-display: fallback;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        src: url('fonts/Pretendard-Light.woff2') format('woff2');
        font-display: fallback;
    }

    * {
        -webkit-tap-highlight-color: transparent;
        font-family: Pretendard, Helvetica, Arial, sans-serif;
    }

    html,
    body {
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
