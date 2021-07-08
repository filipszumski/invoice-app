import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    max-width: 150px;
    margin-right: 15px;
`;

export const Button = styled.button`
    flex: 1 0 51%;
`;

export const Options = styled.div`
    display: none;
    margin-top: 5px;
    position: absolute;
    top: 100%;
    flex: 1 0 51%;
    width: 100%;
    background-color: white;
    border: 1px solid black;

    ${({ active }) => active && css`
        display: block;
    `}
`;