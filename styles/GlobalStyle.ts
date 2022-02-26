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

    @font-face {
        font-family: 'Montserrat';
        font-weight: 700;
        src: url('fonts/Montserrat-Bold.ttf') format('ttf');
        font-display: fallback;
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        src: url('fonts/Montserrat-Medium.ttf') format('ttf');
        font-display: fallback;
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 400;
        src: url('fonts/Montserrat-Regular.ttf') format('ttf');
        font-display: fallback;
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 300;
        src: url('fonts/Montserrat-Light.ttf') format('ttf');
        font-display: fallback;
    }
    @font-face {
        font-family: 'Montserrat';
        font-weight: 200;
        src: url('fonts/Montserrat-Thin.ttf') format('ttf');
        font-display: fallback;
    }

    * {
        -webkit-tap-highlight-color: transparent;
        font-family: 'Pretendard', 'Montserrat', Helvetica, Arial, sans-serif;
    }

    html,
    body {
        padding: 0;
        margin: 0;
    }

    div {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        box-sizing: border-box;
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

    /* hide arrows 
    Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield !important;
    }
`;

export default GlobalStyle;
