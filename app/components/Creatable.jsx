import CreatableSelect from "react-select/creatable"
import { useState } from "react";

export default function Creatable({ options, value, onCreateOption, onSelectedOption }) {

    const customStyles = {
        container: (provided) => ({
            ...provided,
            width: 'full',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#607D8B', // Set the placeholder text color to match Material Tailwind UI
            fontWeight: 500, // Set the font weight to match Material Tailwind UI
            fontSize: '14px', // Set the font size to match Material Tailwind UI
        }),
        menu: (provided) => ({
            ...provided,
            width: '100%',
        }),
    };

    return (
        <CreatableSelect
            isClearable
            placeholder="Выберите продукт"
            onChange={(value) => onSelectedOption(value)}
            onCreateOption={(value => onCreateOption(value))}
            options={options}
            value={value}
            createOptionPosition="last"
            formatCreateLabel={
                (inputValue) => `Создать "${inputValue}?"`}
            styles={customStyles}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: 'black',
                },
            })}
        />
    )
}