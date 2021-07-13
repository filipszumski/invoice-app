import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Options, Button, ButtonText, Option } from "./styled";

export const Filter = ({ filters, setFilters }) => {
    const [active, setActive] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const onClick = ({ target }) => {
            if (popupRef.current === target) {
                return;
            }
            if (popupRef.current && popupRef.current.contains(target)) {
                return;
            }
            return setActive(false);
        };

        if (active) {
            window.addEventListener("click", onClick)
        }
        return () => window.removeEventListener("click", onClick);
    }, [active])

    const onInputChange = ({ target }) => setFilters(filters.map((item) => {
        if (target.name !== item.name) {
            return { ...item };
        }
        return {
            ...item,
            checked: target.checked,
        }
    }));

    return (
        <Wrapper>
            <Button onClick={() => setActive(!active)}>
                <ButtonText>Filter by status</ButtonText>
                {<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2" />
                </svg>
                }
            </Button>
            <Options ref={popupRef} active={active}>
                {filters.map(filter => (
                    <Option key={filter.id}>
                        <input
                            id={filter.name}
                            type={filter.type}
                            name={filter.name}
                            checked={filter.checked}
                            onChange={onInputChange}
                        />
                        <label htmlFor={filter.name}>{filter.label}</label>
                    </Option>
                ))}
            </Options>
        </Wrapper>
    )
}