import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: none;
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0px;
    height: 100%;
    max-width: 500px;
    background-color: white;
    animation-name: animationLeft;
    animation-duration: 0.4s;

  @keyframes animationLeft {
  from {left: -500px; opacity: 0}
  to {left: 0px; opacity: 1}
}

    ${({ active }) => active && css`
        display: block;
    `}
`;