/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { isMobile } from '../../assets/consts/mediaQuery';
import Flex from './Flex';
import RadioButton from './RadioButton';

const RadioButtons = function ({
    items,
    itemWidth,
    register,
}: {
    items: { value: string; text: string }[];
    itemWidth: string;
    register?: UseFormRegisterReturn;
}) {
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
                {items.map((elem, idx) => (
                    <Item
                        key={idx}
                        css={css`
                            width: ${itemWidth};
                        `}
                    >
                        <RadioButton value={elem.value} register={register}>
                            {elem.text}
                        </RadioButton>
                    </Item>
                ))}
            </Flex>
        </div>
    );
};

const Item = styled.div`
    :not(:last-child) {
        margin-right: 20px;
    }
    ${isMobile} {
        margin-right: 10px;
    }
`;

export default RadioButtons;
