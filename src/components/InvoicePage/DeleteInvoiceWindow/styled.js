import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: none;
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    animation-name: animationCenter;
    animation-duration: 0.4s;
    background-color: white;

    @keyframes animationCenter {
        from {transform:translate(-50%, -50%) scale(0); opacity: 0}
        to {transform:translate(-50%, -50%) scale(1); opacity: 1}
    }

    ${({ active }) => active && css`
        display: block;
    `}
    `;