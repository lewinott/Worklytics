import React from "react";
import * as S from './styles'

interface SearchTicketProps {
    onChange: (text: string) => void,
    value: string,
}

const SearchTicket: React.FC<SearchTicketProps> = ({ value, onChange }) => {
    return (
        <S.Background>
            <S.InputText 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                placeholder="Pesquisa por Ticket"
            />
            <S.Icon/>
        </S.Background>
    )
}

export default SearchTicket