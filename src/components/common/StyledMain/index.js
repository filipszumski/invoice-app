import styled, { css } from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    padding: 60px 20px;

    ${({ noInvoices }) => noInvoices && css`
        position: absolute;
        width: 100%;
        height: 100%;
    `}
`;