import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-right: 20px;
`;

export const Button = styled.button`
    flex: 1 0 51%;
    border: none;
    background-color: inherit;
    padding: 0px;

    &:hover {
        cursor: pointer;
    }
`;

export const ButtonText = styled.span`
    margin-right: 10px;
    color: ${({theme}) => theme.font.color.highlighted};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Options = styled.div`
    display: none;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 10px;
    position: absolute;
    top: 100%;
    width: 100%;
    flex: 1 0 51%;
    background-color: white;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    padding: 15px;

    ${({ active }) => active && css`
        display: grid;
    `}
`;

export const Option = styled.p`
    margin: 0px;
`;