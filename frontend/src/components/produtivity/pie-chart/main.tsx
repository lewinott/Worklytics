// Libs
import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

// Style
import * as S from './styles'
// import { colors } from "../../../styles/theme";

// Types
import { ticketType } from "../../../utils/types";

interface pieContainerProps {
    dateFilterTickets: ticketType[]
}

const PieContainer: React.FC<pieContainerProps> = ({ dateFilterTickets }) => {
    const [data, setData] = useState(0); 

    useEffect(() => {
        setData(dateFilterTickets.length);
    }, [dateFilterTickets]);

    type TooltipProps = {
        active?: boolean;
        payload?: { name: string; value: number }[];
    };

    const ticketsData = [
        { name: 'Total respondidos:', value: data, color: "#007BC0" },
        { name: 'Não respondidos:', value: 90-Number(data), color: "#E0E2E5" },
    ];

    const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <S.TooltipContainer>
                    <p>{payload[0].name}</p>
                    <p>{payload[0].value}</p>
                </S.TooltipContainer>
            );
        }
        return null;
    };

    return (
        <S.BackgroundContainer>
            <p>Tickets Respondidos</p>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={ticketsData}  
                        dataKey="value"
                        nameKey="name"
                        type="monotone"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={120} 
                        fill = "none"
                        strokeWidth= {40}
                    >
                        {ticketsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} stroke={entry.color} />
                        ))}
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontWeight="bold"
                        fill="#black"
                    >
                        {`${ticketsData[0].value}/${90}`}
                    </text>
                    <text
                        x="50%"
                        y="56%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#black"
                    >
                        Total Diário
                    </text>
                    <Tooltip content={<CustomTooltip/>}/>
                </PieChart>
            </ResponsiveContainer>
        </S.BackgroundContainer>
    );
}

export default PieContainer;
