import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background.elements};
    border-radius: 0.5rem;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);

    ${({ flex }) => flex && css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}

    ${({ grid }) => grid && css`
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    `}
`;

export const Button = styled.button`
    flex: 1 0 51%;
    border: none;
    background-color: inherit;
    padding: 0px;
    align-self: flex-start;

    &:hover {
        cursor: pointer;
    }
`;

export const ButtonText = styled.span`
    margin-right: 10px;
    color: ${({ theme }) => theme.font.color.highlighted};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;