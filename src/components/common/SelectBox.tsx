import styled from '@emotion/styled';
import { SelectHTMLAttributes } from 'react';
import COLOR from '../../assets/consts/color';
import { bottomArrowIcon } from '../../assets/icons';

const StyledSelect = styled.select`
    width: 300px;
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

export default function SelectBox({
    ...attrs
}: SelectHTMLAttributes<HTMLSelectElement>) {
    return <StyledSelect {...attrs} />;
}
