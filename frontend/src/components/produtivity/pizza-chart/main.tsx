import React from "react";
import * as S from './styles';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

type TooltipProps = {
    active?: boolean;
    payload?: { name: string; value: number }[];
};

const data = [
    { name: 'Bom', value: 60, color: "#007BC0" },
    { name: 'Ruim', value: 40, color: "#FF6E6F" },
];

const PieChartContainer = () => {

    const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <S.TooltipContainer>
                    <p>{payload[0].name}:</p>
                    <p>{payload[0].value}</p>
                </S.TooltipContainer>
            );
        }
        return null;
    };

    return (
        <S.BackgroundContainer>
            <p>Avaliação de Tickets</p>

            <S.LegendContainer>
                {data.map((entry, index) => (
                    <S.LegendItem key={index}>
                        <S.Dot style={{ backgroundColor: entry.color }} />
                        <span>{entry.name}</span>
                    </S.LegendItem>
                ))}
            </S.LegendContainer>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke = "none" />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </S.BackgroundContainer>
    );
}

export default PieChartContainer;
