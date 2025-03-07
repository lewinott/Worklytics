// Utils
import { formatDateToBR } from "../../../utils/utils";

// Components
import Checkbox from "../checkbox/main";
import TableStatus from "../table-status/main";
import { ticketType } from "../../../utils/types";

// Libs
import { useState, useEffect } from "react";

// Style
import * as S from "./styles.ts";

// Contexts
import { useTicket } from "../../../contexts/ticketsContext.tsx";

interface TableItem {
    ticket: ticketType,
}

const TableItem: React.FC<TableItem> = ({ticket }) => {
    const [ statusValue, setStatusValue ] = useState(ticket.status);
    const [ ticketNumber, setTicketNumber ] = useState(ticket.number);
    const { handleSetIdTickets, handleUpdateTicket, checkAllTickets } = useTicket();
    const [ checked, setChecked ] = useState(false);

    const [isFirstRender, setIsFirstRender] = useState(true);

    const firstRender = () => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return true;
        }
        return false
    }

    useEffect(() => {
        if(firstRender()) return;
        
        handleUpdateTicket(ticket.id, statusValue, ticketNumber, checked);
    }, [statusValue, ticketNumber]);

    useEffect(() => {
        if(firstRender()) return;

        setChecked(checkAllTickets);
        handleSetIdTickets(ticket.id, !checkAllTickets);
    }, [checkAllTickets]);

    return ( 
        <S.Tr>
            <td>
                <Checkbox
                    checked={checked}
                    onChange={() => {
                        setChecked(prev => !prev);
                        handleSetIdTickets(ticket.id, !checked);
                    }}
                />
            </td>
            <td>{ticketNumber}</td>
            <td>
                <TableStatus setStatusValue={setStatusValue} statusValue={statusValue}/></td>
            <td>{
                formatDateToBR(ticket.creation_date.replaceAll("-","/"))} {ticket.creation_time}
            </td>
        </S.Tr>
    );
}
 
export default TableItem;