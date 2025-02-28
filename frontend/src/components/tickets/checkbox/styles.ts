import styled from "styled-components";
import { colors } from "../../../styles/theme"; 

export const CheckboxContainer = styled.label`
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
  display: none; 
`;

export const CustomCheckbox = styled.div<{ isChecked: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${({ isChecked }) => (isChecked ? colors.boschblue50 : colors.boschgray50)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &::after {
    height: 100%;
    background-color: ${colors.boschblue50};
    opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
    transition: opacity 0.3s;
  }
`;

export const CheckIcon = styled.div`
    background-image: url('/public/svg/check.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 24px;
`
