import styled, { css } from "styled-components";


export const StyledButton = styled.button`

    ${({ streched }) => streched && css`
        width: 100%;
    `}
`;