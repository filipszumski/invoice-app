import React from "react";

export const Input = ({ htmlEl, id, name, label, type, state, setState, objectInStateName }) => {

    const getInputValue = () => {

        if (objectInStateName) {
            return state[objectInStateName][name];
        }
        return state[name];
    };

    const onInputChange = ({ target }) => {
        setState(() => {
            if (objectInStateName) {
                return {
                    ...state,
                    [objectInStateName]: {
                        ...state[objectInStateName],
                        [target.name]: type === "number" ? +target.value : target.value
                    }
                }
            }
            return {
                ...state,
                [target.name]: type === "number" ? +target.value : target.value
            }
        })
    };

    if (htmlEl === "select") {
        return (
            <p>
                <label htmlFor={id}>Payment Terms</label>
                <select
                    id={id}
                    name={name}
                    value={getInputValue()}
                    onChange={onInputChange}
                >
                    <option value="1">Net 1 day</option>
                    <option value="7">Net 7 days</option>
                    <option value="14">Net 14 days</option>
                    <option value="30">Net 30 days</option>
                </select>
            </p>
        )
    }

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
}