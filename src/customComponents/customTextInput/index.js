import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { formControl, formControlOtp, StyledInput } from "./indexCss";

export default function CustomInput(props) {
    const { name, placeholder, type, lefticon, righticon, label, id, value, onChange, maxLength, tabIndex, onKeyUp, onClick, inputRef, isDisabled, min, max, width = "100%", background, height = "48px", rightIconFunc } = props;
    const [inputType, setInputType] = useState(false);
    // const [eyeChange, setEyeChange] = useState(false);
    const ref = useRef();
    const inputStyle = {
        width: width,
        background: background,
        height: height
    }
    useEffect(() => {
        if (inputRef) {
            ref.current.focus();
        }
    }, [inputRef])
    return (
        maxLength === "1" ?
            <StyledInput className={"inputWithIcon"}>
                {lefticon && <div className="left-icon">{lefticon}</div>}
                <input ref={ref} type={type} name={name} value={value} style={formControlOtp} maxLength={maxLength} tabIndex={tabIndex} onChange={(e) => onClick(e, tabIndex)} onKeyUp={(e) => onKeyUp(e, tabIndex)} />
                {righticon && <div className="right-icon">{righticon}</div>}
            </StyledInput>
            : <>
                <div className='input-container'>
                    {lefticon && <div className='position'>{lefticon}</div>}
                    <div class="did-floating-label-content">
                        <input class="did-floating-input" type={inputType ? 'text' : type} id={id} onChange={onChange} name={name} placeholder={placeholder}
                            disabled={isDisabled}
                            min={min}
                            max={max}
                            value={value}
                            style={{ ...formControl, ...inputStyle }}
                        />
                        {label && <label class="did-floating-label">{label}</label>}
                    </div>
                    {righticon && <div className="right-icon" onClick={rightIconFunc}>{righticon}</div>}
                </div>

            </>
    )
}
