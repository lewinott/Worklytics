import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const BackgroundContainer = styled.div`
    height: 400px;
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);

    p{
        font-size: 24px;
        color: ${colors.boschblue50};
        margin-top: 30px;
    }
`

export const Text = styled.text`
    margin-top: 20px;
    font-size: 34px;
`