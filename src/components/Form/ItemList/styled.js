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
    grid-template-columns: 1fr 50px 75px 75px 50px;
    gap: 10px;
`;