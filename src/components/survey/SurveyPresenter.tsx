/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import Flex from '../common/Flex';
import Input from '../common/Input';
import RadioButton from '../common/RadioButton';
import SelectBox from '../common/SelectBox';

import { Color, ColorResult, SliderPicker } from 'react-color';
import { useState } from 'react';
import Button from '../common/Button';
import { useRecoilState } from 'recoil';
import { CurrentSurveyStep } from '../../recoil/atoms';
import COLOR from '../../assets/consts/color';

// interface SurveyPresenterProps {}

const SurveyPresenter = function () {
    const [favoriteColor, setFavoriteColor] = useState<Color>();
    const [currentSurveyStep, setCurrentSurveyStep] =
        useRecoilState(CurrentSurveyStep);

    const handleFavoriteColorChange = (color: ColorResult) => {
        setFavoriteColor(color.hex);
    };

    const handleClickNext = function () {
        if (currentSurveyStep >= surveyArr.length - 1) return;
        setCurrentSurveyStep((prev) => prev + 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const surveyArr = [
        <>
            <h1
                css={css`
                    margin-bottom: 70px;
                `}
            >
                나의 MBTI는
            </h1>
            <MbtiInput />
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
        <>
            <h1
                css={css`
                    margin-bottom: 70px;
                `}
            >
                기본정보 조사를
                <br />
                시작합니다
            </h1>
            <QuestionContainer>
                <QuestionTitle text="성별" />
                <RadioButtons
                    name="mbti"
                    items={[
                        { value: 'male', text: '남성' },
                        { value: 'female', text: '여성' },
                        { value: 'mtf', text: 'MTF' },
                    ]}
                    itemWidth="100px"
                />
                <RadioButtons
                    name="mbti"
                    items={[
                        { value: 'ftm', text: 'FTM' },
                        { value: 'etc', text: '기타' },
                    ]}
                    itemWidth="100px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="태어난 해" />
                <Input type="number" placeholder="1995 (4자리 입력)" />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="직종" />
                <SelectBox>
                    <option value="">클릭하여 선택</option>
                    <option value="police">경찰</option>
                </SelectBox>
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="취미/특기" />
                <SelectBox>
                    <option value="">클릭하여 선택</option>
                    <option value="police">기타</option>
                </SelectBox>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="사용하는 스마트폰" />
                <RadioButtons
                    name="mbti"
                    items={[
                        { value: 'android', text: '안드로이드' },
                        { value: 'ios', text: 'iOS' },
                    ]}
                    itemWidth="150px"
                />
                <RadioButtons
                    name="mbti"
                    items={[{ value: 'etc', text: '기타' }]}
                    itemWidth="150px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="정치성향" />
                <RadioButtons
                    name="mbti"
                    items={[
                        { value: 'bosu', text: '보수' },
                        { value: 'jinbo', text: '진보' },
                    ]}
                    itemWidth="150px"
                />
                <RadioButtons
                    name="mbti"
                    items={[
                        { value: 'mid', text: '중도' },
                        { value: 'no', text: '관심없음' },
                    ]}
                    itemWidth="150px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="종교" />
                <SelectBox>
                    <option value="">클릭하여 선택</option>
                    <option value="jesus">기독교</option>
                </SelectBox>
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="좋아하는 색상" />
                <div
                    css={css`
                        margin-top: 10px;
                    `}
                >
                    <SliderPicker
                        color={favoriteColor}
                        onChangeComplete={handleFavoriteColorChange}
                    />
                </div>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="주량" />
                <Input type="number" placeholder="숫자 입력 (회)" />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="주량" />
                <Input type="number" placeholder="숫자 입력 (회)" />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="좋아하는 술" />
                <SelectBox>
                    <option value="">클릭하여 선택</option>
                    <option value="soju">소주</option>
                    <option value="beer">맥주</option>
                    <option value="wine">와인</option>
                    <option value="mak">막걸리</option>
                    <option value="bodka">보드카</option>
                    <option value="cock">칵테일</option>
                    <option value="etc">기타</option>
                </SelectBox>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="현재 재직 여부" />
                <RadioButtons
                    name="mbti"
                    items={[
                        { value: 'yes', text: '예' },
                        { value: 'no', text: '아니오' },
                    ]}
                    itemWidth="150px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="직종" />
                <SelectBox>
                    <option value="">클릭하여 선택</option>
                    <option value="soju">소주</option>
                    <option value="beer">맥주</option>
                    <option value="wine">와인</option>
                    <option value="mak">막걸리</option>
                    <option value="bodka">보드카</option>
                    <option value="cock">칵테일</option>
                    <option value="etc">기타</option>
                </SelectBox>
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="소득 수준 (단위:원)" />
                <RadioButtons
                    name="money"
                    items={[{ value: 'yes', text: '2천만 ~ 3천만' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: 'yes', text: '3천만 ~ 4천만' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: 'yes', text: '4천만 ~ 6천만' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: 'yes', text: '6천만 ~ 8천만' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: 'yes', text: '8천만 ~ 1억' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: 'yes', text: '1억 이상' }]}
                    itemWidth="200px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="첫 출근 연도" />
                <Input type="number" placeholder="숫자 네자리 입력" />
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="연애 횟수" />
                <Input type="number" placeholder="숫자 입력" />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="연애 대상" />
                <RadioButtons
                    name="money"
                    items={[
                        { value: 'other', text: '이성' },
                        { value: 'same', text: '동성' },
                        { value: 'both', text: '양성' },
                    ]}
                    itemWidth="100px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="현재 연애 여부 (기혼 포함)" />
                <RadioButtons
                    name="inlove"
                    items={[
                        { value: 'yes', text: '예' },
                        { value: 'no', text: '아니오' },
                    ]}
                    itemWidth="100px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="기혼 여부" />
                <RadioButtons
                    name="marry"
                    items={[
                        { value: 'yes', text: '예' },
                        { value: 'no', text: '아니오' },
                    ]}
                    itemWidth="100px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="가장 긴 연애 기간" />
                <RadioButtons
                    name="money"
                    items={[{ value: '1', text: '0 ~ 3 개월' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: '2', text: '3 ~ 6 개월' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: '3', text: '6 ~ 12 개월' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: '4', text: '1 ~ 3 년' }]}
                    itemWidth="200px"
                />
                <RadioButtons
                    name="money"
                    items={[{ value: '5', text: '3년 이상' }]}
                    itemWidth="200px"
                />
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
        <>
            <h1
                css={css`
                    margin-bottom: 70px;
                `}
            >
                하려면 하고
                <br />
                말려면 마세요 ㅋ
            </h1>
            <QuestionContainer>
                <QuestionTitle text="롤 포지션" />
                <RadioButtons
                    name="inlove"
                    items={[
                        { value: 'top', text: '탑' },
                        { value: 'jug', text: '정글' },
                        { value: 'mid', text: '미드' },
                    ]}
                    itemWidth="100px"
                />
                <RadioButtons
                    name="inlove"
                    items={[
                        { value: 'adc', text: '원딜' },
                        { value: 'sup', text: '서포터' },
                    ]}
                    itemWidth="100px"
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="선호 MBTI" />
                <SelectBox>
                    <option value="">클릭하여 선택</option>
                    <option value="infp">INFP</option>
                    <option value="infj">INFJ</option>
                    <option value="intp">INTP</option>
                    <option value="intj">INTJ</option>
                    <option value="isfp">ISFP</option>
                    <option value="isfj">ISFJ</option>
                    <option value="istp">ISTP</option>
                    <option value="istj">ISTJ</option>
                    <option value="esfp">ESFP</option>
                    <option value="esfj">ESFJ</option>
                    <option value="estp">ESTP</option>
                    <option value="estj">ESTJ</option>
                    <option value="enfp">ENFP</option>
                    <option value="enfj">ENFJ</option>
                    <option value="entp">ENTP</option>
                    <option value="entj">ENTJ</option>
                </SelectBox>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={handleClickNext}
            >
                다음
            </Button>
        </>,
    ];

    return <FormContainer>{surveyArr[currentSurveyStep]}</FormContainer>;
};

const RadioButtons = function ({
    name,
    items,
    itemWidth,
}: {
    name: string;
    items: { value: string; text: string }[];
    itemWidth: string;
}) {
    return (
        <div
            css={css`
                margin: 10px 0;
                :last-child {
                    margin-bottom: 0;
                }
            `}
        >
            <Flex>
                {items.map((elem) => (
                    <Item
                        key={elem.value}
                        css={css`
                            width: ${itemWidth};
                        `}
                    >
                        <RadioButton name={name} value={elem.value}>
                            {elem.text}
                        </RadioButton>
                    </Item>
                ))}
            </Flex>
        </div>
    );
};

const FormContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Item = styled.div`
    :not(:last-child) {
        margin-right: 20px;
    }
`;

const QuestionContainer = function ({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-bottom: 80px;
            `}
        >
            {children}
        </div>
    );
};

const QuestionTitle = function ({ text }: { text: string }) {
    return (
        <h2
            css={css`
                margin-bottom: 7px;
            `}
        >
            {text}
        </h2>
    );
};

const MbtiInput = function () {
    return (
        <input
            css={css`
                width: 97px;
                height: 146px;
                background: transparent;
                border: 0;
                border-bottom: 2px solid ${COLOR.WHITE};
                appearance: none;
                :focus {
                    outline: none;
                }
            `}
        />
    );
};

export default SurveyPresenter;
