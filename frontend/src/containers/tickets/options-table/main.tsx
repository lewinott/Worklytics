import React from "react";
import * as S from './styles'
import SearchTicket from "../../../components/search-ticket/main";
import SecondaryButton from "../../../components/secondary-button/main";

const OptionsTable = () => {
    return (
    <S.MainContainer>
        <SecondaryButton/>
        <SearchTicket/>
    </S.MainContainer>
    )
}

export default OptionsTable