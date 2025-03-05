import * as S from './styles'
import Table from "../../../components/tickets/table/main";
import { FixedContainer } from '../bottom-container/styles';
import PrimaryButton from '../../../components/global/primary-button/main';
import SecondaryButton from '../../../components/global/secondary-button/main';
import SearchTicket from "../../../components/tickets/search-ticket/main";
import FilterStatus from "../../../components/tickets/filter-status/main";
import { useTicket } from '../../../contexts/ticketsContext';

const ContainerTable = () => {
    const { 
        handleFinishTicket, 
        filteredTickets, 
        setFilterStatus, 
        setTextSearch, 
        textSearch,
        idTickets, 
    } = useTicket();
    
    return(
        <>  
            <S.MainContainer>
                <SecondaryButton onClick={() => {}}/>
                <FilterStatus onChange={(status) => setFilterStatus(
                    (prev) => prev.includes(status)
                        ? prev.filter((item) => item !== status)
                        : [...prev, status]
                )}/>
                <SearchTicket value={textSearch} onChange={setTextSearch}/>
            </S.MainContainer>
            <S.Container>
                <Table
                    tickets={filteredTickets}
                />      
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