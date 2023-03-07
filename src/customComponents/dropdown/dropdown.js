import React, { useState } from 'react';
import { formSelect, InputLabel, StyledInput } from '../customTextInput/indexCss';

export default function Dropdown(props) {
    const { option, label, lefticon } = props
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(!isOpen);
        console.log(selectedOption);
    };

    return (
        <>
            <InputLabel>{label}</InputLabel>
            <StyledInput className={"inputWithIcon"}>
                <div className="left-icon">{lefticon}</div>
                <select style={formSelect}>
                    {option.map(option => (
                        <option onClick={onOptionClicked(option)} value={option} >
                            {option}
                        </option>
                    ))
                    }
                </select>
            </StyledInput>
        </>

    )
}
