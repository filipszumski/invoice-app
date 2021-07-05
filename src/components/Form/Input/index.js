import React from "react";
import { UPDATE_STATE_OBJECT_KEY, UPDATE_STATE_KEY } from "../consts";

export const Input = ({ id, name, label, type, state, dispatch, objectInStateName, isValidation }) => {
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
        return dispatch({ type: UPDATE_STATE_KEY, payload: { target: target, type: type } })
    };

    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                value={getInputValue()}
                onChange={onInputChange}
                required={isValidation}
            />
        </p>
    )
};