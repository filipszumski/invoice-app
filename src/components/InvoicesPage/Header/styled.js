import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const StyledTitle = styled.h1`
    flex: 1 0 51%;
    margin: 0px;
    font-size: ${({ theme }) => theme.font.size.title}px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.font.color.highlighted};
`;

export const StyledParagraph = styled.p`
    flex: 1 0 51%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
