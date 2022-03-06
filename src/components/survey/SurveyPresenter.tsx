/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import Flex from '../common/Flex';
import Input from '../common/Input';
import RadioButton from '../common/RadioButton';
import SelectBox from '../common/SelectBox';

import { Color, ColorResult, SliderPicker } from 'react-color';
import { useEffect, useState } from 'react';
import Button from '../common/Button';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
    CurrentSurveyStepState,
    IsShowProcessPercentState,
} from '../../recoil/atoms';
import COLOR from '../../assets/consts/color';
import { useForm, UseFormRegisterReturn } from 'react-hook-form';
import SurveyReqBodyDto from '../../models/SurveyReqBodyDto';
import UsersDto from '../../models/SurveyReqBodyDto/UsersDto';
import AlcoholDto from '../../models/SurveyReqBodyDto/AlcoholDto';
import CommonDto from '../../models/SurveyReqBodyDto/CommonDto';
import LoveDto from '../../models/SurveyReqBodyDto/LoveDto';
import EtcDto from '../../models/SurveyReqBodyDto/EtcDto';
import ResidenceDto from '../../models/SurveyReqBodyDto/ResidenceDto';
import WorkDto from '../../models/SurveyReqBodyDto/WorkDto';
import api from '../../util/api';
import { isMobile } from '../../assets/consts/mediaQuery';
import { useWindowSize } from '../../util/useWindowSize';
import Cookies from 'js-cookie';

// interface SurveyPresenterProps {}

const SurveyPresenter = function () {
    const [favoriteColor, setFavoriteColor] = useState<Color>();
    const [currentSurveyStep, setCurrentSurveyStep] = useRecoilState(
        CurrentSurveyStepState,
    );
    const setIsShowProcessPercent = useSetRecoilState(
        IsShowProcessPercentState,
    );
    const [mbti, setMbti] = useState<{
        ei: '·' | 'E' | 'I';
        ns: '·' | 'N' | 'S';
        ft: '·' | 'F' | 'T';
        pj: '·' | 'P' | 'J';
    }>({ ei: '·', ns: '·', ft: '·', pj: '·' });

    const { register, handleSubmit, setValue, watch } = useForm<
        AlcoholDto &
            CommonDto &
            EtcDto &
            LoveDto &
            ResidenceDto &
            UsersDto &
            WorkDto
    >();

    const { width } = useWindowSize();
    const isMobileSize = (width || 0) < 480;

    useEffect(() => {
        setIsShowProcessPercent(true);
        return () => setIsShowProcessPercent(false);
    }, []);

    const handleFavoriteColorChange = (color: ColorResult) => {
        setValue('personalColor', color.hex);
        setFavoriteColor(color.hex);
    };

    const handleClickNext = function () {
        if (currentSurveyStep >= surveySlide.length - 1) return;
        setCurrentSurveyStep((prev) => prev + 1);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const surveySlide = [
        <>
            <h1
                css={css`
                    margin-bottom: 70px;
                    ${isMobile} {
                        margin-bottom: 30px;
                    }
                `}
            >
                나의 MBTI는
            </h1>
            <div
                css={css`
                    display: flex;
                    justify-content: center;
                    & > button {
                        width: 82px;
                        height: 146px;
                        padding: 0;
                        background: transparent;
                        border: 0;
                        border-bottom: 2px solid ${COLOR.WHITE};
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        cursor: pointer;
                        &:not(:last-child) {
                            margin-right: 70px;
                        }
                        ${isMobile} {
                            width: 60px;
                            &:not(:last-child) {
                                margin-right: 20px;
                            }
                        }
                    }
                    & > button > span {
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-family: Montserrat;
                        font-size: 120px;
                        font-weight: 900;
                        font-style: normal;
                        line-height: 146px;
                        ${isMobile} {
                            font-size: 90px;
                            line-height: 176px;
                        }
                    }
                `}
            >
                {/* mbti 입력 폼 */}
                <button
                    type="button"
                    onClick={() => {
                        if (mbti.ei === 'E') {
                            setMbti((prev) => ({ ...prev, ei: 'I' }));
                        } else {
                            setMbti((prev) => ({ ...prev, ei: 'E' }));
                        }
                    }}
                >
                    <span
                        css={css`
                            background: linear-gradient(
                                180deg,
                                #ff1010 0%,
                                #bf871a 100%
                            );
                            text-shadow: 0px 0px 15px rgba(255, 0, 0, 0.5);
                        `}
                    >
                        {mbti.ei}
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (mbti.ns === 'N') {
                            setMbti((prev) => ({ ...prev, ns: 'S' }));
                        } else {
                            setMbti((prev) => ({ ...prev, ns: 'N' }));
                        }
                    }}
                >
                    <span
                        css={css`
                            background: linear-gradient(
                                180deg,
                                #a3fe12 0%,
                                #3088b1 100%
                            );
                            text-shadow: 0 0 15px rgba(113, 203, 88, 0.5);
                        `}
                    >
                        {mbti.ns}
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (mbti.ft === 'F') {
                            setMbti((prev) => ({ ...prev, ft: 'T' }));
                        } else {
                            setMbti((prev) => ({ ...prev, ft: 'F' }));
                        }
                    }}
                >
                    <span
                        css={css`
                            background: linear-gradient(
                                180deg,
                                #10e2ff 0%,
                                #1a3ebf 100%
                            );
                            text-shadow: 0 0 15px rgba(21, 143, 223, 0.5);
                        `}
                    >
                        {mbti.ft}
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (mbti.pj === 'P') {
                            setMbti((prev) => ({ ...prev, pj: 'J' }));
                        } else {
                            setMbti((prev) => ({ ...prev, pj: 'P' }));
                        }
                    }}
                >
                    <span
                        css={css`
                            background: linear-gradient(
                                180deg,
                                #4a2169 0%,
                                #a147e7 100%
                            );
                            text-shadow: 0 0 15px rgba(119, 53, 170, 0.5);
                        `}
                    >
                        {mbti.pj}
                    </span>
                </button>
            </div>
            <Button
                css={css`
                    margin-top: 100px;
                `}
                onClick={() => {
                    if (
                        mbti.ei === '·' ||
                        mbti.ft === '·' ||
                        mbti.ns === '·' ||
                        mbti.pj === '·'
                    )
                        return;
                    setValue(
                        'mbti',
                        `${mbti.ei}${mbti.ns}${mbti.ft}${mbti.pj}`,
                    );
                    handleClickNext();
                }}
                type="button"
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
                    items={[
                        { value: 'MALE', text: '남성' },
                        { value: 'FEMALE', text: '여성' },
                        { value: 'MTF', text: 'MTF' },
                    ]}
                    itemWidth={isMobileSize ? '80px' : '100px'}
                    register={register('gender')}
                />
                <RadioButtons
                    items={[
                        { value: 'FTM', text: 'FTM' },
                        { value: 'ETC', text: '기타' },
                    ]}
                    itemWidth="100px"
                    register={register('gender')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="태어난 해" />
                <Input
                    type="number"
                    placeholder="1995 (4자리 입력)"
                    register={register('birth', {
                        valueAsNumber: true,
                    })}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="취미/특기" />
                <SelectBox register={register('hobby')}>
                    <option value="">클릭하여 선택</option>
                    <option value="SPORTS">스포츠</option>
                </SelectBox>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                    ${isMobile} {
                        margin-top: 30px;
                    }
                `}
                onClick={handleClickNext}
                type="button"
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="사용하는 스마트폰" />
                <RadioButtons
                    items={[
                        { value: 'ANDROID', text: '안드로이드' },
                        { value: 'IOS', text: 'iOS' },
                        { value: 'ETC', text: '기타' },
                    ]}
                    itemWidth={isMobileSize ? '120px' : '150px'}
                    register={register('smartphoneOS')}
                />
                <RadioButtons
                    items={[{ value: 'etc', text: '기타' }]}
                    itemWidth={isMobileSize ? '120px' : '150px'}
                    register={register('smartphoneOS')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="정치성향" />
                <RadioButtons
                    items={[
                        { value: 'LEFT', text: '진보' },
                        { value: 'MIDDLE', text: '중도' },
                        { value: 'RIGHT', text: '보수' },
                    ]}
                    itemWidth={isMobileSize ? '80px' : '100px'}
                    register={register('politics')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="종교" />
                <SelectBox register={register('religion')}>
                    <option value="">클릭하여 선택</option>
                    <option value="CHRISTIAN">기독교</option>
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
                    ${isMobile} {
                        margin-top: 30px;
                    }
                `}
                onClick={handleClickNext}
                type="button"
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="주량" />
                <Input
                    type="number"
                    placeholder="숫자 입력 (회)"
                    register={register('alcoholPerOnce', {
                        valueAsNumber: true,
                    })}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="음주 횟수 (1주)" />
                <Input
                    type="number"
                    placeholder="숫자 입력 (회)"
                    register={register('alcoholPerWeek', {
                        valueAsNumber: true,
                    })}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="좋아하는 술" />
                <SelectBox register={register('favoriteAlcohol')}>
                    <option value="">클릭하여 선택</option>
                    <option value="SOJU">소주</option>
                    <option value="BEER">맥주</option>
                    <option value="WINE">와인</option>
                    <option value="MAKGEOLI">막걸리</option>
                    <option value="BOARDCAKE">보드카</option>
                    <option value="COCKTAIL">칵테일</option>
                </SelectBox>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                    ${isMobile} {
                        margin-top: 30px;
                    }
                `}
                onClick={handleClickNext}
                type="button"
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="현재 재직 여부" />
                <RadioButtons
                    items={[
                        { value: 1, text: '예' },
                        { value: 0, text: '아니오' },
                    ]}
                    itemWidth={isMobileSize ? '120px' : '150px'}
                    register={register('isEmployed')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="직종" />
                <SelectBox register={register('job', { valueAsNumber: true })}>
                    <option value="">클릭하여 선택</option>
                    <option value="1">서비스업</option>
                    <option value="2">물류</option>
                    <option value="3">영업직</option>
                </SelectBox>
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="소득 수준 (단위:원)" />
                <RadioButtons
                    items={[{ value: '2000', text: '2천만 ~ 3천만' }]}
                    itemWidth="200px"
                    register={register('income', { valueAsNumber: true })}
                />
                <RadioButtons
                    items={[{ value: '3000', text: '3천만 ~ 4천만' }]}
                    itemWidth="200px"
                    register={register('income', { valueAsNumber: true })}
                />
                <RadioButtons
                    items={[{ value: '4000', text: '4천만 ~ 6천만' }]}
                    itemWidth="200px"
                    register={register('income', { valueAsNumber: true })}
                />
                <RadioButtons
                    items={[{ value: '6000', text: '6천만 ~ 8천만' }]}
                    itemWidth="200px"
                    register={register('income', { valueAsNumber: true })}
                />
                <RadioButtons
                    items={[{ value: '8000', text: '8천만 ~ 1억' }]}
                    itemWidth="200px"
                    register={register('income', { valueAsNumber: true })}
                />
                <RadioButtons
                    items={[{ value: '10000', text: '1억 이상' }]}
                    itemWidth="200px"
                    register={register('income', { valueAsNumber: true })}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="첫 출근 연도" />
                <Input
                    type="number"
                    placeholder="숫자 네자리 입력"
                    register={register('firstWorkYear', {
                        valueAsNumber: true,
                    })}
                />
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                    ${isMobile} {
                        margin-top: 30px;
                    }
                `}
                onClick={handleClickNext}
                type="button"
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="연애 횟수" />
                <Input
                    type="number"
                    placeholder="숫자 입력"
                    register={register('loveCount', { valueAsNumber: true })}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="연애 대상" />
                <RadioButtons
                    items={[
                        { value: 'STRAIGHT', text: '이성' },
                        { value: 'HOMOSEXUAL', text: '동성' },
                        { value: 'BISEXUAL', text: '양성' },
                    ]}
                    itemWidth={isMobileSize ? '80px' : '100px'}
                    register={register('isLoveTarget')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="현재 연애 여부 (기혼 포함)" />
                <RadioButtons
                    items={[
                        { value: 1, text: '예' },
                        { value: 0, text: '아니오' },
                    ]}
                    itemWidth="100px"
                    register={register('isInLove')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="기혼 여부" />
                <RadioButtons
                    items={[
                        { value: 1, text: '예' },
                        { value: 0, text: '아니오' },
                    ]}
                    itemWidth="100px"
                    register={register('isMarried')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="가장 긴 연애 기간" />
                <RadioButtons
                    items={[{ value: '0TO3MONTHS', text: '0 ~ 3 개월' }]}
                    itemWidth="200px"
                    register={register('longestLoveTime')}
                />
                <RadioButtons
                    items={[{ value: '3TO6MONTHS', text: '3 ~ 6 개월' }]}
                    itemWidth="200px"
                    register={register('longestLoveTime')}
                />
                <RadioButtons
                    items={[{ value: '6TO12MONTHS', text: '6 ~ 12 개월' }]}
                    itemWidth="200px"
                    register={register('longestLoveTime')}
                />
                <RadioButtons
                    items={[{ value: '1TO3YEARS', text: '1 ~ 3 년' }]}
                    itemWidth="200px"
                    register={register('longestLoveTime')}
                />
                <RadioButtons
                    items={[{ value: 'OVER3YEARS', text: '3년 이상' }]}
                    itemWidth="200px"
                    register={register('longestLoveTime')}
                />
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                    ${isMobile} {
                        margin-top: 30px;
                    }
                `}
                onClick={handleClickNext}
                type="button"
            >
                다음
            </Button>
        </>,
        <>
            <QuestionContainer>
                <QuestionTitle text="롤 포지션" />
                <RadioButtons
                    items={[
                        { value: 'TOP', text: '탑' },
                        { value: 'JUNGLE', text: '정글' },
                        { value: 'MIDDLE', text: '미드' },
                    ]}
                    itemWidth={isMobileSize ? '80px' : '100px'}
                    register={register('leagueOfLegendsPosition')}
                />
                <RadioButtons
                    items={[
                        { value: 'BOTTOM', text: '원딜' },
                        { value: 'SUPPORT', text: '서포터' },
                    ]}
                    itemWidth="100px"
                    register={register('leagueOfLegendsPosition')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="롤 티어" />
                <RadioButtons
                    items={[
                        { value: 'CHALLENGER', text: '챌린져' },
                        { value: 'MASTER', text: '마스터' },
                        { value: 'DIAMOND', text: '다이아' },
                    ]}
                    itemWidth={isMobileSize ? '80px' : '100px'}
                    register={register('leagueOfLegendsTier')}
                />
                <RadioButtons
                    items={[
                        { value: 'PLATINUM', text: '플래티넘' },
                        { value: 'GOLD', text: '골드' },
                    ]}
                    itemWidth="120px"
                    register={register('leagueOfLegendsTier')}
                />
                <RadioButtons
                    items={[
                        { value: 'SILVER', text: '실버' },
                        { value: 'BRONZE', text: '브론즈' },
                        { value: 'IRON', text: '아이언' },
                    ]}
                    itemWidth={isMobileSize ? '80px' : '100px'}
                    register={register('leagueOfLegendsTier')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="스타크래프트 종족" />
                <RadioButtons
                    items={[
                        { value: 'TERRAN', text: '테란' },
                        { value: 'PROTOSS', text: '프로토스' },
                    ]}
                    itemWidth="120px"
                    register={register('starcraftRace')}
                />
                <RadioButtons
                    items={[{ value: 'ZERG', text: '저그' }]}
                    itemWidth="120px"
                    register={register('starcraftRace')}
                />
            </QuestionContainer>
            <QuestionContainer>
                <QuestionTitle text="선호 MBTI" />
                <SelectBox register={register('favoriteMbti')}>
                    <option value="">클릭하여 선택</option>
                    <option value="INFP">INFP</option>
                    <option value="INFJ">INFJ</option>
                    <option value="INTP">INTP</option>
                    <option value="INTJ">INTJ</option>
                    <option value="ISFP">ISFP</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ISTJ">ISTJ</option>
                    <option value="ESFP">ESFP</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="ENFP">ENFP</option>
                    <option value="ENFJ">ENFJ</option>
                    <option value="ENTP">ENTP</option>
                    <option value="ENTJ">ENTJ</option>
                </SelectBox>
            </QuestionContainer>
            <Button
                css={css`
                    margin-top: 100px;
                    ${isMobile} {
                        margin-top: 30px;
                    }
                `}
                type="submit"
            >
                제출
            </Button>
        </>,
    ];

    return (
        <FormContainer
            onSubmit={handleSubmit(async (data) => {
                // users
                const { token, mbti, phone }: UsersDto = data;
                // common
                const {
                    gender,
                    birth,
                    personalColor,
                    hobby,
                    smartphoneOS,
                    politics,
                    religion,
                }: CommonDto = data;
                // etc
                const {
                    leagueOfLegendsPosition,
                    leagueOfLegendsTier,
                    starcraftRace,
                    favoriteMbti,
                }: EtcDto = data;
                // love
                const {
                    loveCount,
                    isLoveTarget,
                    isInLove,
                    isMarried,
                    longestLoveTime,
                }: LoveDto = data;
                // residence
                const {
                    residenceType,
                    isOnlyChild,
                    allBrothers,
                    allSisters,
                    myOrder,
                    currentAddress,
                }: ResidenceDto = data;
                // alcohol
                const {
                    alcoholPerOnce,
                    alcoholPerWeek,
                    favoriteAlcohol,
                }: AlcoholDto = data;
                // work
                const { isEmployed, job, income, firstWorkYear }: WorkDto =
                    data;

                const surveyData: SurveyReqBodyDto = {
                    user: {
                        token: Cookies.get('auth') || '',
                        mbti,
                        phone: '01024416661',
                    },
                    common: {
                        gender,
                        birth,
                        personalColor,
                        hobby,
                        smartphoneOS,
                        politics,
                        religion,
                    },
                    love: {
                        loveCount,
                        isLoveTarget,
                        isInLove,
                        isMarried,
                        longestLoveTime,
                    },
                    // todo: 뷰 개발 필요
                    residence: {
                        residenceType: 'SINGLE',
                        isOnlyChild: 1,
                        allBrothers: 1,
                        allSisters: 2,
                        myOrder: 3,
                        currentAddress: '서울',
                    },
                    work: {
                        isEmployed,
                        job,
                        income,
                        firstWorkYear,
                    },
                    alcohol: {
                        alcoholPerOnce,
                        alcoholPerWeek,
                        favoriteAlcohol,
                    },
                    etc: {
                        leagueOfLegendsPosition,
                        leagueOfLegendsTier,
                        starcraftRace,
                        favoriteMbti,
                    },
                };

                try {
                    await api({
                        method: 'post',
                        url: '/survey',
                        data: surveyData,
                    });
                } catch {}
            })}
        >
            {surveySlide.map((elem, idx) => {
                return (
                    <div
                        key={idx}
                        css={css`
                            display: ${idx === currentSurveyStep
                                ? 'flex'
                                : 'none'};
                            flex-direction: column;
                            ${isMobile} {
                                align-items: center;
                            }
                        `}
                    >
                        {elem}
                    </div>
                );
            })}
        </FormContainer>
    );
};

const RadioButtons = function ({
    items,
    itemWidth,
    register,
}: {
    items: { value: string | number; text: string }[];
    itemWidth: string;
    register?: UseFormRegisterReturn;
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
                {items.map((elem, idx) => (
                    <Item
                        key={idx}
                        css={css`
                            width: ${itemWidth};
                        `}
                    >
                        <RadioButton value={elem.value} register={register}>
                            {elem.text}
                        </RadioButton>
                    </Item>
                ))}
            </Flex>
        </div>
    );
};

const FormContainer = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Item = styled.div`
    :not(:last-child) {
        margin-right: 20px;
    }
    ${isMobile} {
        margin-right: 10px;
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
                ${isMobile} {
                    padding: 0 20px;
                }
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

export default SurveyPresenter;
