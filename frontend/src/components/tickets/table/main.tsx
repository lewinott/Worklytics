import * as S from './styles';
import { useEffect } from "react";
import { ticketType } from '../../../utils/types';
import TableItem from '../table-item/main';
import { useTicket } from '../../../contexts/ticketsContext';

interface TableProps {
    tickets: ticketType[],
}

const Table: React.FC<TableProps> = ({tickets}) => {
    const { handleGetTickets } = useTicket();
    
    useEffect(() => {
        handleGetTickets();
    }, [])

    return(
        <S.Table>
            {   
                
                tickets.length ? 
                    <table>
                        <tbody>
                            {
                                tickets.map((ticket) => (       
                                    <TableItem
                                        key={ticket.id} 
                                        ticket={ticket}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                :
                "Não há tickets cadastrados"
            }
        </S.Table>
    )
}

export default Table