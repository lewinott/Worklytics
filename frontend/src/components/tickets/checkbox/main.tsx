import React from "react";
import * as S from "./styles"; 

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <S.CheckboxContainer onClick={onChange}>
      <S.HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
      <S.CustomCheckbox isChecked={checked}>
        {checked && <S.CheckIcon />} 
      </S.CustomCheckbox>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
