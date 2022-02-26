import styled from '@emotion/styled';
import React from 'react';
import COLOR from '../../assets/consts/color';

const Container = styled.div`
    background: ${COLOR.DARKGRAY};
    width: 100%;
    height: calc(100vh - 218px);
`;

const ContentsContainer = ({ children }: { children: React.ReactNode }) => {
    return <Container>{children}</Container>;
};

export default ContentsContainer;
