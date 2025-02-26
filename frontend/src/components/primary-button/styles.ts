import styled from "styled-components";
import { colors } from "../../styles/theme";

export const ButtonBackground = styled.button`
    height: 48px;
    padding: 0px 16px 0px 16px;
    background-color: ${colors.boschblue50};
    border: none;
    color: ${colors.boschwhite};
    cursor: pointer;
    font-size: 16px;

    &:hover{
        background-color: ${colors.boschblue40};
    }
`