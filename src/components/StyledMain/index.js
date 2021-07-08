import styled, { css } from "styled-components";

export const StyledMain = styled.main`
    max-width: 750px;
    margin: 0 auto;

    ${({ noInvoices }) => noInvoices && css`
        display: flex;
        flex-direction: column;
        height: 100%;
    `}
`;