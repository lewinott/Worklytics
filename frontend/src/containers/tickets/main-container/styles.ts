import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const LineForms = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.boschblack}
`
