import React from 'react';
import './Checkbox.css'

export default function Checkbox({ id, handleClick, isChecked, isDisabled = false, value, name }) {
  
    return (
        <input
            id={id}
            name={name}
            type="checkbox"
            onChange={handleClick}
            checked={isChecked}
            disabled={isDisabled}
            value={value}
        />
    )
}
