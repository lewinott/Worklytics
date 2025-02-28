import React from "react";
import * as S from './styles'
import Header from "../../../components/global/header/main";
import FormsContainer from "../forms-container/main";
import OptionsTable from "../options-table/main";
import Table from "../../../components/tickets/table/main";
import ContainerTable from "../table-container/main";
import { FixedContainer } from "../bottom-container/styles";
import PrimaryButton from "../../../components/global/primary-button/main";

const MainContainer = () => {
    return (
        <S.MainContainer>
            <S.LeftContainer>

                <Header mainTitle="Controle diário de tickets" 
                subTitle="Por favor, para salvar seus tickets, informe-os abaixo"/>
                <FormsContainer />
                <S.LineForms/>

                <Header mainTitle="Seus tickets" 
                subTitle="Pesquise pelo número ou filtre pelo status do ticket"/>
                <OptionsTable />
                <ContainerTable/>
                <FixedContainer>
                    <PrimaryButton description="Finalizar ticket"/>
                </FixedContainer>
                
            </S.LeftContainer>
        </S.MainContainer>
    )
}

export default MainContainer