/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { Button, Input } from '../common';
import { Title, InputContainer, InputBox, Time } from './AuthStyled';

const AuthPresenter = () => {
    return (
        <>
            <InputContainer>
                <Title>
                    <div>본인인증을 시작합니다.</div>
                    <div> Enter를 눌러 진행하세요.</div>
                </Title>
                <InputBox>
                    <div>
                        <Input placeholder="이름 입력" />
                    </div>
                    <div>
                        <Input placeholder="전화번호 입력" />
                    </div>
                    <div>
                        <Input placeholder="인증번호 입력" />
                    </div>
                </InputBox>
            </InputContainer>
            <div css={{ flex: 1, overflow: 'hidden' }}>
                <Time>03:00</Time>
                <Button>문자 재발송</Button>
            </div>
        </>
    );
};

export default AuthPresenter;
