import styled, { css } from "styled-components";

export const Wrapper = styled.p`
    display: grid;
    grid-template-columns: minmax(100px, 1fr);

    ${({ flex }) => flex && css`
        flex: 1;
    `}
`

export const StyledSelect = styled.select`
    margin: 10px 10px 10px 0px;
    padding: 5px;
`;