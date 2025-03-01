import React from "react";
import * as S from "./styles"

const Navbar = () =>{
    return(
        <>
        <S.Supergraphic/>
        <S.Bar>
            <S.Logo/>
            <S.LabelLogin>
                <S.IconLogin/>
                Login
            </S.LabelLogin>
        </S.Bar>
        <S.Nav>
            <S.Options>
                <li>Acesse seus Tickets</li>
                <li>Análise de Produtividade</li>
            </S.Options>
            <p>Worklytics</p>
        </S.Nav>
        <S.GrayLine/>
        </>
    )
}

export default Navbar