import React from "react";
import MainContainer from "../../containers/tickets/main-container/main";
import Navbar from "../../components/global/navbar/main";
import * as S from './styles'
// import { useAuth } from "../../contexts/authContext";
// import { useNavigate } from "react-router-dom";

const Tickets = () => {
    // const { isLogged } = useAuth();
    // const navigate = useNavigate();

    // if (!isLogged) {
    //     console.log("VVVVVVVVVVVVVVVVVVV")
    //     navigate("/login");
    //     return null;
    // }

    return (
        <S.Background>
            <Navbar />
            <MainContainer />
        </S.Background>
    )
}

export default Tickets