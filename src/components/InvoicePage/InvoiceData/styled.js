import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
    flex: 1 0 100%;
`;

export const Paragraph = styled.p`
    display: grid;
    grid-template-columns: 1fr;

    ${({ alignContentStart }) => alignContentStart && css`
        align-content: start;
    `}

    ${({ strech }) => strech && css`
        flex 1;
    `};
`;

export const AmountDue = styled.p`
    display: grid;
    grid-template-columns: 1fr auto;
`;

export const ItemsList = styled.ul`
    list-style-type: none;
    padding-left: 0px;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
`;