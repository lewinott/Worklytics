import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 200px; 
    max-height: 200px;
    overflow-y: auto; 

    &::-webkit-scrollbar{
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${colors.boschgray90};
    }

    &::-webkit-scrollbar-thumb {
        background: ${colors.boschgray50}; 
    }

`

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    grid-gap: 50px;
    margin-bottom: 50px;
`