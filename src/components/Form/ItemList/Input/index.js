import React from "react";

export const Input = ({ name, type, liIndex, liItem, dispatch, blur }) => {
    const onInputChange = ({ target }) => {

        dispatch({
            type: "updateListItemObjectKey", payload: {
                target: target,
                index: liIndex
            }
        })
    };

    const onInputBlur = ({ target }) => {
        if (!blur) {
            return;
        }
        dispatch({
            type: "updateListItemObjectKeyOnInputBlur", payload: {
                target: target,
                index: liIndex
            }
        })
    }

    return (
        <input
            name={name}
            type={type}
            value={liItem[name]}
            onChange={onInputChange}
            onBlur={onInputBlur}
        />
    )
}