import React, { useState, useEffect } from "react";
import * as S from './styles'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTicket } from "../../../contexts/ticketsContext";


type TooltipProps = {
    active?: boolean;
    payload?: { name: string; value: number }[];
};

const BarChartContainer = () => {
    const { tickets } = useTicket();
    const [data, setData] = useState([
        { status: 'Pendentes', tickets: 0 },
        { status: 'Em espera', tickets: 0 },
        { status: 'Resolvidos', tickets: 0 },
    ]); 

    const handleSetDataGraphic = () => {
        let assigned = 0;
        let waiting = 0;
        let closed = 0;

        tickets.map((ticket) => {
            if (ticket.status === "Pendente") assigned += 1;
            if (ticket.status === "Em espera") waiting += 1;
            if (ticket.status === "Resolvido") closed += 1;
        })

        const newData = [...data];
        newData[0].tickets = assigned
        newData[1].tickets = waiting
        newData[2].tickets = closed

        setData(newData);
    };

    useEffect(() => {
        handleSetDataGraphic();
    }, [tickets]);

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
    
    return (
        <S.BackgroundContainer>
            <p>Tickets Respondidos por Status</p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                >

                        <XAxis dataKey="status" axisLine={false} tickLine={false} stroke="#000000" tickSize={20} />
                    <Tooltip content={<CustomTooltip />} />

                    <Bar dataKey="tickets" barSize={70}>
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