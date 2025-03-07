import { useState } from "react";
import InputTicket from "../../components/tickets/input-ticket/main";
import SelectStatus from "../../components/tickets/select-status/main";
import PrimaryButton from "../../components/global/primary-button/main";
import { useTicket } from "../../contexts/ticketsContext";
import * as S from "./styles";

const GadgetForm = () => {
    const { handleCreateTicket } = useTicket();
    const [ numberTicket, setNumberTicket ] = useState<string>("");
    const [ statusTicket, setStatusTicket ] = useState<string>("");

    const handleSubmit = () => {
        handleCreateTicket(numberTicket, statusTicket);
    }

    return (
        <S.MainContainer>
            <InputTicket value={numberTicket} handleChange={setNumberTicket} />
            <SelectStatus handleChange={setStatusTicket} />
            <PrimaryButton description="Salvar" onClick={handleSubmit} />
        </S.MainContainer>
    )
};

export default GadgetForm;
