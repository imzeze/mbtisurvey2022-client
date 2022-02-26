import styled from '@emotion/styled';
import React from 'react';
import { DARKGREY, WHITE } from '../../assets/consts/color';

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    overflow: hidden;
    transition: 0.25s;

    & + label {
        font-size: 20px;
        color: ${WHITE};
        display: inline-block;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: 50%;
        transition: 0.25s;
    }

    & + label:before {
        content: ' ';
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 16px;
        text-align: center;
        vertical-align: middle;
        background: ${WHITE};
        border-radius: 50%;
        transition: 0.25s;
        margin-right: 10px;
    }

    &:checked + label:before {
        background: ${DARKGREY};
        box-shadow: inset 0px 0px 0px 5px ${WHITE};
        transition: 0.25s;
    }
`;

interface RadioButtonProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    children: string;
}

export default function RadioButton({ children, ...attrs }: RadioButtonProps) {
    const random = String(Math.random() * 5);

    return (
        <div>
            <StyledInput id={random} type="radio" {...attrs} />
            <label htmlFor={random}>{children}</label>
        </div>
    );
}