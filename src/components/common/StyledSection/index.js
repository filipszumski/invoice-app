import styled, { css } from "styled-components";

export const StyledSection = styled.section`
margin-top: 30px;
display: grid;
grid-template-columns: 1fr;
gap: 25px;

${({ noInvoices }) => noInvoices && css`
    justify-items: center;
    height: 100%;
    align-content: center;
`}
`;