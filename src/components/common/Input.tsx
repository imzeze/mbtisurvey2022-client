import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import COLOR from '../../assets/consts/color';

const StyledInput = styled.input`
    width: 356px;
    height: 65px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${COLOR.WHITE};
    color: ${COLOR.WHITE};
    font-size: 40px;
    padding-left: 20px;
    padding-bottom: 10px;
    appearance: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${COLOR.WHITE50};
    }
`;

export default function Input({
    ...attrs
}: InputHTMLAttributes<HTMLInputElement> & {
    register?: UseFormRegisterReturn;
}) {
    return <StyledInput {...attrs} />;
}
