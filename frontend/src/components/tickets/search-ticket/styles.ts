import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 292px;
    height: 48px;
    padding: 4px 16px 0px 16px;
    background-color: ${colors.boschgray90};
    border-bottom: 1px solid ${colors.boschblack};

    &:hover{
        background-color: ${colors.boschgray80};
    }
`

export const InputText = styled.input`
    width: 90%;
    font-size: 16px;
    outline: none;
    height: 20px;
    border: none;
    background-color: transparent;

    &::placeholder{
        color: ${colors.boschblack}
    }

`

export const Icon = styled.div`
    background-image: url('/public/svg/search.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    height: 100%;
    width: 10%;
`