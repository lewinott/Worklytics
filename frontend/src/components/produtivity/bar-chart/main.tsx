import React from "react";
import * as S from './styles'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';


type TooltipProps = {
    active?: boolean;
    payload?: { name: string; value: number }[];
};

const MAX_VALUE = 100;

const data = [
    { status: 'Atribuidos', Tickets: 5 },
    { status: 'Em espera', Tickets: 12 },
    { status: 'Fechados', Tickets: 8 },
];

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <S.TooltipContainer>
                <p>Total de tickets:</p>
                <p>{payload[0].value}</p>
            </S.TooltipContainer>
        );
    }
    return null;
};

const BarChartContainer = () => {
    return (
        <S.BackgroundContainer>
            <p>Tickets Respondidos por Status</p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >

                        <XAxis dataKey="status" axisLine={false} tickLine={false} stroke="#000000" tickSize={20} />
                    <Tooltip content={<CustomTooltip />} />

                    <Bar dataKey="Tickets" barSize={70}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill='#007BC0' />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </S.BackgroundContainer>
    );
}

export default BarChartContainer;