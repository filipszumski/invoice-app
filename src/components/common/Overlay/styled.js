import styled, { css } from "styled-components";

export const Overlay = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    animation-name: animationBackground;
    animation-duration: 0.4s;
    background-color: rgba(0, 0, 0, 0.5);

    @keyframes animationBackground {
        from {background-color: white;}
        to {background-color: rgba(0, 0, 0, 0.5);}
    }

    ${({ active }) => active && css`
        display: block;
    `}
`;