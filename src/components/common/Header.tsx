import styled from '@emotion/styled';
import { Image } from '.';
import COLOR from '../../assets/consts/color';
import { ArrowHeader } from '../../assets/icons';
import { useLocalStorage } from '../../util/useLocalStorage';

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

const Header = () => {
    const localstorage = useLocalStorage();
    const step = localstorage ? localStorage.getItem('step') || 0 : 0;

    return (
        <Container>
            <Image src={ArrowHeader} width="136px" height="32px" alt="arrow" />
            <span>{(Number(step) / 10) * 100}%</span>
        </Container>
    );
};

export default Header;
