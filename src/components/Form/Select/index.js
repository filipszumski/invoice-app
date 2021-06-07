import React from "react";
import { UPDATE_STATE_KEY } from "../stateActionsConsts";

export const Select = ({ id, name, label, type, state, dispatch }) => {

    const onInputChange = ({ target }) => {
        return dispatch({ type: UPDATE_STATE_KEY, payload: { target: target, type: type } })
    };
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={name}
                value={state[name]}
                onChange={onInputChange}
            >
                <option value="1">Net 1 day</option>
                <option value="7">Net 7 days</option>
                <option value="14">Net 14 days</option>
                <option value="30">Net 30 days</option>
            </select>
        </p>
    )
};