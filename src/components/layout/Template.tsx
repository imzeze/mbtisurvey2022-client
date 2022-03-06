import styled from '@emotion/styled';
import React from 'react';

interface ContentsContainerProps {
    children: React.ReactNode;
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
`;

const Template = ({
    children,
    ...containerStyle
}: ContentsContainerProps & React.CSSProperties) => {
    return <Container style={{ ...containerStyle }}>{children}</Container>;
};

export default Template;
