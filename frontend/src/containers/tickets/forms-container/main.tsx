import React from "react";
import * as S from './styles'
import InputTicket from "../../../components/input-ticket/main";
import PrimaryButton from "../../../components/primary-button/main";
import SelectStatus from "../../../components/select-status/main";

const FormsContainer = () => {
    return (
    <S.MainContainer>
        <InputTicket/>
        <SelectStatus/>
        <PrimaryButton/>
    </S.MainContainer>
    )
}

export default FormsContainer