// Libs
import React from "react";

// Style
import * as S from './styles'
// import { colors } from "../../../styles/theme";

interface pieContainerProps {
    title: string,
    numberTickets: number,
}

const TextChartContainer: React.FC<pieContainerProps> = ({ title, numberTickets }) => {
    return (
        <S.BackgroundContainer>
            <p>{title}</p>
            <S.Text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="bold"
                fill="#black"
            >
                {numberTickets < 10 ? "0" + numberTickets : numberTickets}
            </S.Text>
        </S.BackgroundContainer>
    );
}

export default TextChartContainer;
