import styled from '@emotion/styled';
import RadioButton from '../common/RadioButton';

// interface SurveyPresenterProps {}

const SurveyPresenter = function () {
    return (
        <FormContainer>
            <h1>
                기본정보 조사를
                <br />
                시작합니다
            </h1>
            <ItemContainer>
                <h2>MBTI</h2>
                <RadioButton name="mbti">INFP</RadioButton>
                <RadioButton name="mbti">INFJ</RadioButton>
                <RadioButton name="mbti">INTP</RadioButton>
                <RadioButton name="mbti">INTJ</RadioButton>
                <RadioButton name="mbti">ISFP</RadioButton>
                <RadioButton name="mbti">ISFJ</RadioButton>
                <RadioButton name="mbti">ISTP</RadioButton>
                <RadioButton name="mbti">ISTJ</RadioButton>
                <RadioButton name="mbti">ENFP</RadioButton>
                <RadioButton name="mbti">ENFJ</RadioButton>
                <RadioButton name="mbti">ENTP</RadioButton>
                <RadioButton name="mbti">ENTJ</RadioButton>
                <RadioButton name="mbti">ESFP</RadioButton>
                <RadioButton name="mbti">ESFJ</RadioButton>
                <RadioButton name="mbti">ESTP</RadioButton>
                <RadioButton name="mbti">ESTJ</RadioButton>
            </ItemContainer>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    margin-top: 40px;
    min-width: 600px;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default SurveyPresenter;
