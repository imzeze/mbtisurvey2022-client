import styled from '@emotion/styled';
import COLOR from '../../assets/consts/color';
import { Logo } from '../../assets/icons';

import Image from 'next/image';

const Container = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    background: ${COLOR.DARKGRAY};
    color: ${COLOR.WHITE};
    padding: 32px;
    font-size: 28px;
    height: 96px;
`;

const Footer = () => {
    return (
        <Container>
            <Image src={Logo} width={74} height={24} />
        </Container>
    );
};

export default Footer;
