import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 15px;
    border-radius: 1.5rem;
    border: none;
    color: ${({ theme }) => theme.colors.buttons.color};

    ${({ buttonStyle }) => buttonStyle && css`
    background-color: ${({ theme }) => theme.colors.buttons[buttonStyle]};
    `}

    ${({ streched }) => streched && css`
        width: 100%;
    `}

    ${({ boxShadow }) => boxShadow && css`
        box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    `}

    ${({ extraContent }) => extraContent && css`
        padding: 10px 15px 10px 10px;
    `}
    
    ${({ brigthBackground }) => brigthBackground && css`
        color: inherit;
    `}
`;

export const ExtraContent = styled.span`
    display: inline-flex;
    line-height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 8px;
    background-color: ${({ theme }) => theme.colors.background.elements};
    color: ${({ theme }) => theme.colors.buttons.button1};
`;