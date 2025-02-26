import React, { useState } from "react";
import * as S from "./styles"; 

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <S.CheckboxContainer>
      <S.HiddenCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <S.CustomCheckbox isChecked={isChecked}>
        {isChecked && <S.CheckIcon />} 
      </S.CustomCheckbox>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
