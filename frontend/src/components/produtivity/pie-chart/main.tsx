import React, { useEffect, useState } from "react";
import * as S from './styles'
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { colors } from "../../../styles/theme";
import { useTicket } from "../../../contexts/ticketsContext";


type TooltipProps = {
    active?: boolean;
    payload?: { name: string; value: number }[];
};

const PieContainer = () => {
    const { tickets } = useTicket();
    const [data, setData] = useState(0); 

    const handleSetDataGraphic = () => {
        let countDiaryTicket = 0;

        tickets.map((ticket) => {
            const ticketday = ticket.creation_date.split("-")[2];
            const today = "0" + new Date().getDate();
            if (ticketday == today) countDiaryTicket += 1;
        })
        
        setData(countDiaryTicket);
    }

    useEffect(() => {
        handleSetDataGraphic();
    }, [tickets])

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
                        {`${ticketsData[0].value}/${ticketsData[1].value + ticketsData[0].value}`}
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
