import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px;
    height: 48px;
    padding: 4px 16px 0px 16px;
    background-color: ${colors.boschgray90};
    border-bottom: 1px solid ${colors.boschblack};

    &:hover{
        background-color: ${colors.boschgray80};
    }

    label{
        font-size: 12px;
    }
`

export const InputText = styled.input`
    font-size: 16px;
    outline: none;
    height: 20px;
    border: none;
    background-color: transparent;

`