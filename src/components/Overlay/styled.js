import styled, { css } from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    z-index: 1;
    display: none;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    ${({ active }) => active && css`
        display: block;
    `}
`;