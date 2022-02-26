import { css } from '@emotion/react';
import COLOR from '../src/assets/consts/color';

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

    h1 {
        font-size: 40px;
        line-height: 48px;
        font-weight: 400;
        margin: 0;
        color: ${COLOR.WHITE};
    }

    h2 {
        font-size: 28px;
        line-height: 37px;
        font-weight: 700;
        margin: 0;
        color: ${COLOR.WHITE};
    }

    h3 {
        /* font-size: 40px;
        line-height: 48px;
        font-weight: 400;
        margin: 0; */
        color: ${COLOR.WHITE};
    }
`;

export default GlobalStyle;
