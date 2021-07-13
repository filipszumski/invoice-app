import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: ${({ theme }) => theme.colors.background.elements};
    border: 1px solid ${({ theme }) => theme.colors.background.elements};
    padding: 15px 0px;
    text-decoration: none;
    border-radius: 0.5rem;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    color: ${({ theme }) => theme.font.color.normal};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.hover};
        outline: none;
    }
`;

export const StyledHeading = styled.h2`
        color: ${({ theme }) => theme.font.color.highlighted};
        font-weight: ${({ theme }) => theme.font.weights.bold};
        font-size: ${({ theme }) => theme.font.size.subtitle}px;
        margin: 0px;
`;
