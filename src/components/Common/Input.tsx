import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import { WHITE, WHITE50 } from '../../assets/consts/color';

const StyledInput = styled.input`
    width: 300px;
    height: 65px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${WHITE};
    color: ${WHITE};
    font-size: 40px;
    padding-left: 20px;
    padding-bottom: 10px;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${WHITE50};
    }
`;

export default function Input({
    ...attrs
}: InputHTMLAttributes<HTMLInputElement>) {
    return <StyledInput {...attrs} />;
}
