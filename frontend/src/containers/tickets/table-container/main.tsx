// Style
import * as S from './styles'

// Components
import Table from "../../../components/tickets/table/main";
import { FixedContainer } from '../bottom-container/styles';
import PrimaryButton from '../../../components/global/primary-button/main';
import SecondaryButton from '../../../components/global/secondary-button/main';
import SearchTicket from "../../../components/tickets/search-ticket/main";
import FilterStatus from "../../../components/tickets/filter-status/main";

// Contexts
import { useTicket } from '../../../contexts/ticketsContext';

const ContainerTable = () => {
    const { 
        handleFinishTicket, 
        setFilterStatus, 
        setTextSearch, 
        textSearch,
        idTickets, 
        setCheckAllTickets,
    } = useTicket();
    
    return(
        <>  
            <S.MainContainer>
                <SecondaryButton onClick={() => setCheckAllTickets(prev => !prev)}/>
                <FilterStatus onChange={(status) => setFilterStatus(
                    (prev) => prev.includes(status)
                        ? prev.filter((item) => item !== status)
                        : [...prev, status]
                )}/>
                <SearchTicket value={textSearch} onChange={setTextSearch}/>
            </S.MainContainer>
            <S.Container>
                <Table/>      
            </S.Container>
            <FixedContainer>
                <PrimaryButton onClick={() => {
                    idTickets.map((id) => {
                        handleFinishTicket(id);
                    });
                }} description="Finalizar ticket"/>
            </FixedContainer>
        </>
    )
}

export default ContainerTable