/** @jsxImportSource @emotion/react */
import { jsx, keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import COLOR from '../../assets/consts/color';
import { Button } from '../common';
import { isDesktop } from '../../assets/consts/mediaQuery';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding: 96px;
    font-size: 18px;
`;

const Types = styled.div`
    width: 50%;
    height: 536px;
    border-left: 1px solid ${COLOR.WHITE};
    z-index: 2;
`;

const Title = styled.div`
    font-family: 'Montserrat';
    font-weight: 300;
    border-bottom: 2px solid ${COLOR.WHITE};
    height: 200px;
    text-align: left;

    ${isDesktop} {
        font-size: 200px;
    }
`;

const SubTitle = styled.div`
    font-family: 'Montserrat';
    font-weight: 700;
    margin: 4px 0 40px;

    ${isDesktop} {
        font-size: 60px;
    }
`;

const Intro = styled.div`
    line-height: 28px;
    margin-bottom: 34px;
    width: 600px;
`;

const TypesBox = styled.div`
    font-weight: 200;
    font-size: 40px;

    color: ${COLOR.WHITE50};
    padding: 70px;

    > div {
        line-height: 50px;
        font-family: 'Montserrat';
    }
`;

const Highlight = styled.span`
    font-weight: 300;
`;

const Display = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const getRandomNum = (num: number) => {
    num = Math.floor(Math.random() * 301) - 100;
    return `${num}px`;
};

const upAndDown = (top: number, left: number) => keyframes`
   0% { transform: translate3d(${getRandomNum(top)}, ${getRandomNum(
    left,
)}, 0); }
   20% { transform: translate3d(${getRandomNum(top)}, ${getRandomNum(
    left,
)}, 0); }
   40% { transform: translate3d(${getRandomNum(top)}, ${getRandomNum(
    left,
)}, 0); }
   60% { transform: translate3d(${getRandomNum(top)}, ${getRandomNum(
    left,
)}, 0); }
   80% { transform: translate3d(${getRandomNum(top)}, ${getRandomNum(
    left,
)}, 0); }
   100% { transform: translate3d(${getRandomNum(top)}, ${getRandomNum(
    left,
)}, 0); }
`;

const Circle = styled.div<{
    size: number;
    startColor: string;
    endColor: string;
    direction?: string;
    shadow: string;
    top: number;
    left: number;
}>`
    ${({ size }) => size && `width: ${size}px;`}
    ${({ size }) => size && `height: ${size}px;`}
    ${({ top }) => top && `top: ${top}%;`}
    ${({ left }) => left && `left: ${left}%;`}
    ${({ top, left }) =>
        top &&
        left &&
        css`
            animation: ${upAndDown(top, left)} 10s linear infinite;
        `}
    ${({ shadow }) => shadow && `box-shadow: ${shadow};`}
    ${({ startColor, endColor, direction }) =>
        startColor &&
        endColor &&
        `background: linear-gradient(${
            direction ? `${direction},` : ''
        } ${startColor}, ${endColor});`}
   
    border-radius: 100%;
    position: absolute;
    animation-direction: alternate;
`;

const MainPresenter = () => {
    return (
        <Container>
            <Description>
                <Title>MBTI</Title>
                <SubTitle>SURVEY 2022</SubTitle>
                <Intro>
                    <div>
                        반갑습니다, MBTI 서베이에 오신 여러분들을 진심으로
                        환영합니다.
                    </div>
                    <br />
                    <div>
                        MBTI에 대한 다양한 정보들이 돌아다니는 현재, 아직도
                        우리는 너무 오래되거나 값이 정확하지 않는 통계 자료를
                        기반으로 이야기를 풀어 나가고 있습니다.
                    </div>
                    <br />
                    <div>
                        이제, 여러분들의 힘을 모아 진실한 이야기를 만들어주세요.
                        이 서베이를 통해 중복이 없는 최신의 통계 자료를 만들어
                        봅시다!
                    </div>
                </Intro>
                <Button>시작합니다!</Button>
            </Description>
            <Types>
                <TypesBox>
                    <div css={{ color: COLOR.WHITE }}>
                        <Highlight>E</Highlight>xtraversion
                    </div>
                    <div>
                        <Highlight>I</Highlight>ntroversion
                    </div>
                    <div>
                        <Highlight>S</Highlight>ensing
                    </div>
                    <div css={{ color: COLOR.WHITE }}>
                        i<Highlight>N</Highlight>tuition
                    </div>
                    <div>
                        <Highlight>T</Highlight>hinking
                    </div>
                    <div css={{ color: COLOR.WHITE }}>
                        <Highlight>F</Highlight>eeling
                    </div>
                    <div css={{ color: COLOR.WHITE }}>
                        <Highlight>J</Highlight>udging
                    </div>
                    <div>
                        <Highlight>P</Highlight>Perceiving
                    </div>
                </TypesBox>
            </Types>
            <Display>
                <div
                    css={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Circle
                        size={190}
                        top={Math.floor(Math.random() * 16)}
                        left={Math.floor(Math.random() * 16 + 10)}
                        shadow={`0px 0px 60px 0px ${COLOR.REDSHADOW80}`}
                        startColor={COLOR.RED}
                        endColor={COLOR.DEEPYELLOW}
                    />
                    <Circle
                        size={332}
                        top={Math.floor(Math.random() * 6) + 20}
                        left={Math.floor(Math.random() * 21) + 30}
                        shadow={`0px 0px 80px 0px ${COLOR.GREENSHADOW80}`}
                        startColor={COLOR.LIGHTGREEN}
                        endColor={COLOR.BLUEGREEN}
                    />
                    <Circle
                        size={300}
                        top={Math.floor(Math.random() * 11) + 40}
                        left={Math.floor(Math.random() * 11) + 40}
                        shadow={`0px 0px 80px 0px ${COLOR.PURPLESHADOW}`}
                        direction="to bottom right"
                        startColor={COLOR.DARKPURPLE}
                        endColor={COLOR.PURPLE}
                    />
                    <Circle
                        size={194}
                        top={Math.floor(Math.random() * 11 + 30)}
                        left={Math.floor(Math.random() * 11)}
                        shadow={`0px 0px 50px 0px ${COLOR.BLUESHADOW80}`}
                        direction="to bottom left"
                        startColor={COLOR.SKYBLUE}
                        endColor={COLOR.BLUE}
                    />
                </div>
            </Display>
        </Container>
    );
};

export default MainPresenter;
