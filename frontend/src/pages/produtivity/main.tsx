import React from "react";
import ProdutivityContainer from "../../containers/produtivity/main";
import Navbar from "../../components/global/navbar/main";
import * as S from './styles'

const Produtivity = () => {
    return (
        <S.Background>
            <Navbar />
            <ProdutivityContainer />
        </S.Background>
    )
}

export default Produtivity