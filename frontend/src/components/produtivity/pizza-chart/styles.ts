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
        margin: 30px 0px 10px;

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


export const LegendContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    span{
        font-size: 15px;
    }
`;

export const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;