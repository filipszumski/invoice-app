import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
    flex: 1 0 100%;
`;

export const Data = styled.p`
    display: grid;
    grid-template-columns: 1fr;

    ${({ alignContentStart }) => alignContentStart && css`
        align-content: start;
    `}

    ${({ strech }) => strech && css`
        flex 1;
    `};
`;