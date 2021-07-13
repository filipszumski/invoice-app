import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;

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
    background-color: ${({ theme }) => theme.colors.background.amountDueElement};
    margin: 0px;
    padding: 25px;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
`;

export const ItemsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.background.body};
    list-style-type: none;
    padding: 25px;
    margin: 0px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
`;

export const StyledSpan = styled.span`
    margin: 5px 0px;
    align-self: center;

    ${({ highlighted }) => highlighted && css`
        color: ${({ theme }) => theme.font.color.highlighted};
    `}  

    ${({ bold }) => bold && css`
        font-weight: ${({ theme }) => theme.font.weights.bold};
    `}  

    ${({ title }) => title && css`
        font-size: inherit;
    `}

    ${({ important }) => important && css`
        font-size: ${({ theme }) => theme.font.size.keyInfo}px;
    `}

    ${({ justifyEnd }) => justifyEnd && css`
        justify-self: end;
    `}

    ${({ amountDue }) => amountDue && css`
        color: ${({ theme }) => theme.font.color.amountDue};
    `}
`;