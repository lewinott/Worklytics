import * as S from './styles';
import { useEffect } from "react";
import TableItem from '../table-item/main';
import { useTicket } from '../../../contexts/ticketsContext';

const Table = () => {
    const { handleGetTickets, filteredTickets } = useTicket();
    
    useEffect(() => {
        handleGetTickets();
    }, [])

    return(
        <S.Table>
            {
                filteredTickets.length ? 
                    <table>
                        <tbody>
                            {
                                filteredTickets.map((ticket) => (    
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