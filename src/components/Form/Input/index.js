import React from "react";

export const Input = ({ id, name, label, type, state, dispatch, objectInStateName }) => {
    const getInputValue = () => {
        if (objectInStateName) {
            return state[objectInStateName][name];
        }
        return state[name];
    };

    const onInputChange = ({ target }) => {
        if (objectInStateName) {
            return dispatch({ type: "updateStateObjectKey", payload: { target: target, objectInStateName: objectInStateName } })
        }
        return dispatch({ type: "updateStateKey", payload: { target: target, type: type } })
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
            />
        </p>
    )
};