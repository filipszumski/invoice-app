import React, { useState } from "react";
import { Wrapper, Options, Button } from "./styled";

export const Filter = ({ filters, setFilters }) => {
    const [active, setActive] = useState(false);
    const onInputChange = ({ target }) => setFilters(filters.map((item) => {
        if (target.name !== item.name) {
            return {...item};
        }
        return {
            ...item,
            checked: target.checked,
        }
    }));

    return (
        <Wrapper>
            <Button onClick={() => setActive(!active)}>Filter by status</Button>
            <Options active={active}>
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