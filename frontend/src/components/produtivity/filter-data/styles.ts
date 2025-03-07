import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 10px;

  input {
    width: 292px;
    height: 48px;
    padding: 4px 16px 0px 16px;
    background-color: ${colors.boschgray90};
    border-bottom: 1px solid ${colors.boschblack};
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    
    &:hover{
        background-color: ${colors.boschgray80};
    }
  }

  .calendar {
    position: absolute;
    left: 0;
    z-index: 1;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(0.53); 
    transform-origin: top left;
  }
`;


