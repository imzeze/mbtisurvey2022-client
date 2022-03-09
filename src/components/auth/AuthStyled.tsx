import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { isDesktop, isMobile } from '../../assets/consts/mediaQuery';

export const Container = styled.div`
    ${isMobile} {
        padding: 0 32px;
        margin-top: 40px;
    }

    ${isDesktop} {
        display: flex;
        align-items: center;
    }
`;

const fadeIn = keyframes`
   0% { opacity: 0; }
   100% { opacity: 1; }
`;

export const Title = styled.div`
    width: 100%;
    max-width: 440px;
    margin-bottom: 32px;
    font-size: 40px;
    font-weight: 400;

    > div {
        line-height: 48px;
    }

    ${isMobile} {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 28px;
    }
`;

export const InputBox = styled.div`
    width: 100%;
    max-width: 440px;

    > div {
        margin-bottom: 32px;
        ${isMobile} {
            margin-bottom: 10px;
        }
        animation: ${fadeIn} 1s linear;
    }
`;

export const InputContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Time = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    flex: 1;
    height: 326px;

    > div {
        position: absolute;
        height: 100%;
        right: -10px;
        ${isDesktop} {
            width: 100%;
            max-width: 500px;
        }
        ${isMobile} {
            width: 100%;
            max-width: 440px;
        }
        ${isMobile} {
            width: 254px;
        }

        white-space: nowrap;
        overflow: hidden;
    }
`;
