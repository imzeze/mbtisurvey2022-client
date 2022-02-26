import styled from '@emotion/styled';
import { SelectHTMLAttributes } from 'react';
import { WHITE, WHITE50 } from '../../assets/consts/color';

import { bottomArrowIcon } from '../../assets/icons';

const StyledSelect = styled.select`
    width: 300px;
    height: 65px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${WHITE};
    color: ${WHITE};
    font-size: 40px;
    padding-left: 20px;
    padding-bottom: 10px;
    appearance: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: ${WHITE50};
    }
`;

export default function SelectBox({
    ...attrs
}: SelectHTMLAttributes<HTMLSelectElement>) {
    return <StyledSelect {...attrs} />;
}
