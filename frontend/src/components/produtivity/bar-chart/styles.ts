import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const BackgroundContainer = styled.div`
    height: 400px;
    width: 100%;
    margin: 20px;
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


export const TooltipContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 9px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    margin: 0;
    grid-gap: 10px;

    p{
        color: black;
        font-size: 12px;
        margin: 0;
    }
`;