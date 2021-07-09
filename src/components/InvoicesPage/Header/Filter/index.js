import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Options, Button } from "./styled";

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
            <Button onClick={() => setActive(!active)}>Filter by status</Button>
            <Options ref={popupRef} active={active}>
                {filters.map(filter => (
                    <p key={filter.id}>
                        <input
                            id={filter.name}
                            type={filter.type}
                            name={filter.name}
                            checked={filter.checked}
                            onChange={onInputChange}
                        />
                        <label htmlFor={filter.name}>{filter.label}</label>
                    </p>
                ))}
            </Options>
        </Wrapper>
    )
}