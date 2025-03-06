import React from "react";
import * as S from "./styles"
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
    const currentRoute: string = location.pathname;

    return (
        <>
            <S.Supergraphic />
            <S.Bar>
                <S.Logo />
                <S.LabelLogin>
                    <S.IconLogin />
                    Login
                </S.LabelLogin>
            </S.Bar>
            <S.Nav>
                <S.Options>
                    <li><Link to="/">Acesse seus Tickets</Link></li>
                    <li><Link to="/produtivity">Análise de Produtividade</Link></li>
                </S.Options>
                <p>Worklytics</p>
            </S.Nav>
            <S.GrayLine />
        </>
    )
}

export default Navbar