import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0px;
    height: 100%;
    transform: translateX(-100%);
    background-color: white;
    transform-origin: left;

    ${({ active }) => active && css`
        display: block;
        transition: all 300ms;
        transform: translateX(0%);
    `}
`;