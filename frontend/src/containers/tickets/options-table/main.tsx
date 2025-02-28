import React from "react";
import * as S from './styles'
import SearchTicket from "../../../components/tickets/search-ticket/main";
import SecondaryButton from "../../../components/global/secondary-button/main";
import FilterStatus from "../../../components/tickets/filter-status/main";

const OptionsTable = () => {
    return (
    <S.MainContainer>
        <SecondaryButton/>
        <FilterStatus/>
        <SearchTicket/>
    </S.MainContainer>
    )
}

export default OptionsTable