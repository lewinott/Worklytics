import { formatDateToBR } from "../../../utils/utils";
import Checkbox from "../checkbox/main";
import TableStatus from "../table-status/main";
import { ticketType } from "../../../utils/types";
import { useState, useEffect } from "react";
import * as S from "./styles.ts";
import { useTicket } from "../../../contexts/ticketsContext.tsx";

interface TableItem {
    ticket: ticketType,
}

const TableItem: React.FC<TableItem> = ({ticket }) => {
    const [ statusValue, setStatusValue ] = useState(ticket.status);
    const [ ticketNumber, setTicketNumber ] = useState(ticket.number);
    const [ checked, setChecked ] = useState(false);

    const [isFirstRender, setIsFirstRender] = useState(true);
    const { setIdTickets, handleUpdateTicket } = useTicket();

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        handleUpdateTicket(ticket.id, statusValue, ticketNumber, checked);
    }, [statusValue, ticketNumber]);

    return ( 
        <S.Tr>
            <td>
                <Checkbox
                    checked={checked}
                    onChange={() => {
                        setChecked(prev => !prev);
                        setIdTickets(ticket.id, !checked);
                    }}
                />
            </td>
            <td>{ticketNumber}</td>
            <td>
                <TableStatus 
                    setStatusValue={setStatusValue} 
                    statusValue={statusValue}
                /></td>
            <td>{
                formatDateToBR(ticket.creation_date.replaceAll("-","/"))} {ticket.creation_time}
            </td>
        </S.Tr>
    );
}
 
export default TableItem;