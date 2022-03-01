import { useState } from 'react';
import { Button, Input, Timer } from '../common';
import { Title, InputContainer, InputBox, Time } from './AuthStyled';

const AuthPresenter = () => {
    const [retryCount, setRetryCount] = useState(0);

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
            <Time>
                <div>
                    <Timer seconds={180} retryCount={retryCount} />
                    <Button onClick={() => setRetryCount((prev) => prev + 1)}>
                        문자 재발송
                    </Button>
                </div>
            </Time>
        </>
    );
};

export default AuthPresenter;
