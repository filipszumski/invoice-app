import React from "react";
import { UPDATE_LIST_ITEM_OBJECT_KEY, UPDATE_LIST_ITEM_OBJECT_KEY_ON_INPUT_BLUR } from "../../stateActionsConsts";

export const Input = ({ name, type, liIndex, liItem, dispatch, blur }) => {
    const onInputChange = ({ target }) => {

        dispatch({
            type: UPDATE_LIST_ITEM_OBJECT_KEY, payload: {
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
            type: UPDATE_LIST_ITEM_OBJECT_KEY_ON_INPUT_BLUR, payload: {
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