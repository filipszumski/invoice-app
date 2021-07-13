import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: none;
    position: fixed;
    z-index: 2;
    top: 0px;
    left: 0px;
    height: 100%;
    padding: 20px;
    max-width: 650px;
    background-color: white;
    overflow-y: auto;
    animation-name: animationLeft;
    animation-duration: 0.4s;

  @keyframes animationLeft {
  from {left: -600px; opacity: 0}
  to {left: 0px; opacity: 1}
}

    ${({ active }) => active && css`
        display: block;
    `}
`;

export const FormSection = styled.section`
    margin: 10px 0px;

    ${({ flex }) => flex && css`
        display: flex;
        justify-content: space-between;
    `}
`;

export const Title = styled.h2`
    font-size: ${({theme}) => theme.font.size.subtitle};
    color: ${({theme}) => theme.font.color.highlighted};
`;