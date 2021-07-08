import styled, { css } from "styled-components";


export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    ${({ noInvoices }) => noInvoices && css`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const StyledParagraph = styled.p`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;