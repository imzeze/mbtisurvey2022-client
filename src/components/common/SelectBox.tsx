import styled from '@emotion/styled';
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

interface SelectBoxProps
    extends React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    children: React.ReactNode;
}

export default function SelectBox({ children, ...attrs }: SelectBoxProps) {
    return <StyledSelect {...attrs}>{children}</StyledSelect>;
}
