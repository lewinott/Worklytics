import React from "react";
import MainContainer from "../../containers/tickets/main-container/main";
import Navbar from "../../components/navbar/main";
import * as S from './styles'

const Tickets = () => {
    return (
        <S.Background>
            <Navbar />
            <MainContainer />
        </S.Background>
    )
}

export default Tickets