import React, { useState } from "react";
import {
  formSelect,
  InputLabel,
  StyledInput,
} from "../customTextInput/indexCss";
import "../customTextInput/index.scss";

export default function Dropdown(props) {
  const { option, label, lefticon, placeholder } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(!isOpen);
    // console.log(selectedOption);
  };

  return (
    <>
      {/* <InputLabel>{label}</InputLabel> */}
      <StyledInput className={"inputWithIcon"}>
        {lefticon && <div className="position">{lefticon}</div>}
        <div class="did-floating-label-content">
          <select style={formSelect} class="did-floating-select">
            <option value="" disabled selected hidden>{placeholder} </option>
            {option.map((option) => (
              <option onClick={onOptionClicked(option)} value={option}>
                {option}
              </option>
            ))}
          </select>
          {label && <label class="did-floating-label">{label}</label>}
        </div>
       
      </StyledInput>
    </>
  );
}
