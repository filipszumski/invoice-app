import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
    display: flex;

    ${wrap => wrap && css`
        flex-wrap: wrap;
    `}

    ${alignCenter => alignCenter && css`
        align-items: center;
    `}
`;