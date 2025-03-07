// Libs
import { useState } from 'react';

// Styles
import * as S from './styles'

// Components
import InputTicket from "../../../components/tickets/input-ticket/main";
import PrimaryButton from "../../../components/global/primary-button/main";
import SelectStatus from "../../../components/tickets/select-status/main";

// Contexts
import { useTicket } from '../../../contexts/ticketsContext';

const FormsContainer = () => {
    const { handleCreateTicket } = useTicket();
    const [ numberTicket, setNumberTicket ] = useState<string>("");
    const [ statusTicket, setStatusTicket ] = useState<string>("Status");

    const handleSubmit = () => {
        handleCreateTicket(numberTicket, statusTicket);
        setNumberTicket("")
    }

    return (
        <S.MainContainer>
            <InputTicket value={numberTicket} handleChange={setNumberTicket} />
            <SelectStatus selectedOption={statusTicket} setSelectedOption={setStatusTicket} />
            <PrimaryButton description="Salvar" onClick={handleSubmit} />
        </S.MainContainer>
    )
}

export default FormsContainer