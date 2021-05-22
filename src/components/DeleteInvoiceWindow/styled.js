import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    z-index: 2;
    background-color: white;
    top: 50%;
    left: 50%;
    max-width: 500px;
    transform: translate(-50%, -50%) scale(0);

    ${({ active }) => active && css`
        transform: translate(-50%, -50%) scale(1);
        transition: all 300ms ease-in-out;
    `}
    `;