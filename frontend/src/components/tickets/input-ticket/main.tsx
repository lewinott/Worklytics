import React from "react";
import * as S from './styles'

interface InputTicketProps {
    handleChange?: (ticketId: string) => void,
    value: string,
}

const InputTicket: React.FC<InputTicketProps> = ({ handleChange, value }) => {
    return (
        <S.Background>
            <label>Ticket</label>
            { 
                handleChange ?
                    <S.InputText value={ value } onChange={e => {handleChange(e.target.value)}} />
                :
                    <S.InputText/>
            }
        </S.Background>
    )
}

export default InputTicket