import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    list-style-type: none;
    padding-left: 0px;
    gap: 10px;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 65px 80px 80px 50px;
    gap: 10px;
    margin: 0px;
`;

export const DeleteButton = styled.button`
    padding: 0;
    border: none;
    background-color: inherit;
`;

export const StyledSpan = styled.span`
    justify-self: center;
    align-self: center;
`;