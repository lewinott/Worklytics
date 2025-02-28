import React from "react";
import * as S from './styles'
import InputTicket from "../../../components/tickets/input-ticket/main";
import PrimaryButton from "../../../components/global/primary-button/main";
import SelectStatus from "../../../components/tickets/select-status/main";

const FormsContainer = () => {
    return (
    <S.MainContainer>
        <InputTicket/>
        <SelectStatus/>
        <PrimaryButton description="Salvar"/>
    </S.MainContainer>
    )
}

export default FormsContainer