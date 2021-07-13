import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
    display: flex;

    ${({ wraped }) => wraped && css`
        flex-wrap: wrap;
    `};

    ${({ alignCenter }) => alignCenter && css`
        align-items: center;
    `};

    ${({ spaceBetween }) => spaceBetween && css`
        justify-content: space-between;
    `};

    ${({ strech }) => strech && css`
        flex 1;
    `};

    ${({ directionColumn }) => directionColumn && css`
        flex-direction: column;
    `};

    ${({ gap }) => gap && css`
        gap: 10px;
    `};
`;