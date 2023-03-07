import React, { useRef, useEffect, useState } from "react";

import { CrossEyeIcon } from "../../assets/icon/inputIcon";
import { formControl, formControlOtp, InputLabel, StyledInput } from "./indexCss";

export default function CustomInput(props) {
    const { name, placeholder, type, lefticon, righticon, label, id, value, onChange, maxLength, tabIndex, onKeyUp, onClick, inputRef } = props;
    const [inputType, setInputType] = useState(false);
    const ref = useRef();
    const changeType = () => {
        if (type === 'password') {
            setInputType(!inputType);
        }
    }
    useEffect(() => {
        if (inputRef) {
            ref.current.focus();
        }
    }, [inputRef])
    return (
        maxLength === "1" ?
            <StyledInput className={"inputWithIcon"}>
                <div className="left-icon">{lefticon}</div>
                <input ref={ref} type={type} name={name} value={value} style={formControlOtp} maxLength={maxLength} tabIndex={tabIndex} onChange={(e) => onClick(e, tabIndex)} onKeyUp={(e) => onKeyUp(e, tabIndex)} />
                <div className="right-icon">{righticon}</div>
            </StyledInput>
            : <>
                <InputLabel>{label}</InputLabel>
                <StyledInput className={"inputWithIcon"}>
                    <div className="left-icon">{lefticon}</div>
                    <input type={inputType ? 'text' : type} id={id} onChange={onChange} name={name} placeholder={placeholder} style={formControl} />
                    <div className="right-icon" onClick={() => changeType()}>{!inputType ? righticon : <CrossEyeIcon />}</div>
                </StyledInput>
            </>
    )
}
