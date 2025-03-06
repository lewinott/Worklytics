import * as S from './styles'
import Header from "../../../components/global/header/main";
import FormsContainer from "../forms-container/main";
import ContainerTable from "../table-container/main";
import { TicketProvider } from '../../../contexts/ticketsContext';

const MainContainer = () => {
    return (
        
        <S.MainContainer>
            <S.LeftContainer>
                <TicketProvider>
                    <Header mainTitle="Controle diário de tickets" 
                    subTitle="Por favor, para salvar seus tickets, informe-os abaixo"/>
                    <FormsContainer/>
                    <S.LineForms/>
                    
                    <Header mainTitle="Seus tickets" 
                    subTitle="Pesquise pelo número ou filtre pelo status do ticket"/>
                
                
                    <ContainerTable/>
                </TicketProvider>
            </S.LeftContainer>
        </S.MainContainer>
    )
}

export default MainContainer