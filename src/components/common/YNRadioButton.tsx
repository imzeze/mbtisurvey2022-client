/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { isMobile } from '../../assets/consts/mediaQuery';
import Flex from './Flex';
import RadioButton from './RadioButton';

interface YNRadioButtonProps {
    width?: string;
    register: UseFormRegisterReturn;
}

const Item = styled.div`
    :not(:last-child) {
        margin-right: 20px;
    }
    ${isMobile} {
        margin-right: 10px;
    }
`;

/**
 * @author minxd95
 * @component
 * @example
 */
export default function YNRadioButton({ width, register }: YNRadioButtonProps) {
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
                <Item
                    css={css`
                        width: ${width};
                    `}
                >
                    <RadioButton value="1" register={register}>
                        예
                    </RadioButton>
                </Item>
                <Item
                    css={css`
                        width: ${width};
                    `}
                >
                    <RadioButton value="0" register={register}>
                        아니오
                    </RadioButton>
                </Item>
            </Flex>
        </div>
    );
}
