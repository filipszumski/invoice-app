import React from "react";
import { UPDATE_STATE_OBJECT_KEY, UPDATE_STATE_KEY } from "../consts";
import { Wrapper, StyledInput } from "./styled";

export const Input = ({ id, name, label, type, state, dispatch, objectInStateName, isValidation, flex }) => {
    const getInputValue = () => {
        if (objectInStateName) {
            return state[objectInStateName][name];
        }
        return state[name];
    };

    const onInputChange = ({ target }) => {
        if (objectInStateName) {
            return dispatch({ type: UPDATE_STATE_OBJECT_KEY, payload: { target: target, objectInStateName: objectInStateName } })
        }
        return dispatch({ type: UPDATE_STATE_KEY, payload: { target: target } })
    };

    return (
        <Wrapper flex>
            <label htmlFor={id}>{label}</label>
            <StyledInput
                id={id}
                name={name}
                type={type}
                value={getInputValue()}
                onChange={onInputChange}
                required={isValidation}
            />
        </Wrapper>
    )
};