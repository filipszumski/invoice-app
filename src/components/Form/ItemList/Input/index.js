import React from "react";
import { UPDATE_LIST_ITEM_OBJECT_KEY, UPDATE_LIST_ITEM_OBJECT_KEY_ON_INPUT_BLUR } from "../../consts";
import { StyledInput } from "./styled";

export const Input = ({ name, type, liIndex, liItem, dispatch, blur, isValidation }) => {
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
        <StyledInput
            name={name}
            type={type}
            value={liItem[name]}
            onChange={onInputChange}
            onBlur={onInputBlur}
            required={isValidation}
        />
    )
}