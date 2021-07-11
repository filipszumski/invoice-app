import React from "react";
import { UPDATE_STATE_KEY } from "../consts";
import { Wrapper } from "./styled";
import { StyledSelect } from "./styled";

export const Select = ({ id, name, label, type, state, dispatch, flex }) => {

    const onInputChange = ({ target }) => {
        return dispatch({ type: UPDATE_STATE_KEY, payload: { target: target } })
    };
    return (
        <Wrapper flex>
            <label htmlFor={id}>{label}</label>
            <StyledSelect
                id={id}
                name={name}
                type={type}
                value={state[name]}
                onChange={onInputChange}
            >
                <option value="1">Net 1 day</option>
                <option value="7">Net 7 days</option>
                <option value="14">Net 14 days</option>
                <option value="30">Net 30 days</option>
            </StyledSelect>
        </Wrapper>
    )
};