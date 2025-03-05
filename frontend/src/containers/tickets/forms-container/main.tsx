import * as S from './styles'
import InputTicket from "../../../components/tickets/input-ticket/main";
import PrimaryButton from "../../../components/global/primary-button/main";
import SelectStatus from "../../../components/tickets/select-status/main";
import { createTicketRequest } from '../../../api/ticketsRequest';
import { useState } from 'react';
import { useAuth } from '../../../contexts/authContext';

const FormsContainer = () => {
    const { getUserSub, getAccessToken } = useAuth();
    const [ numberTicket, setNumberTicket ] = useState<string>("");
    const [ statusTicket, setStatusTicket ] = useState<string>("");

    const handleCreateTicket = async () => {
        const userSub = getUserSub() || "";
        const accessToken = getAccessToken() || "";

        try{
            const { data } = await createTicketRequest(
                numberTicket, 
                statusTicket, 
                userSub, 
                accessToken,
            );
            console.log(data)
        }catch(error){
            console.log(error);
        }
    }
    
    const handleSubmit = () => {
        handleCreateTicket();
    }

    return (
        <S.MainContainer>
            <InputTicket value={numberTicket} handleChange={setNumberTicket} />
            <SelectStatus handleChange={setStatusTicket} />
            <PrimaryButton description="Salvar" onClick={handleSubmit} />
        </S.MainContainer>
    )
}

export default FormsContainer