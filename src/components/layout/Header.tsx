import styled from '@emotion/styled';
import { Image } from '../common';
import { ArrowHeader } from '../../assets/icons';
import { CurrentSurveyStepState } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 32px;
    font-size: 28px;
    width: 100%;
    height: 96px;
    background: transparent;
`;

const Header = () => {
    const currentSurveyStep = useRecoilValue(CurrentSurveyStepState);

    return (
        <Container>
            <Image src={ArrowHeader} width="136px" height="32px" alt="arrow" />
            <span>{((Number(currentSurveyStep) / 6) * 100).toFixed(0)}%</span>
        </Container>
    );
};

export default Header;
