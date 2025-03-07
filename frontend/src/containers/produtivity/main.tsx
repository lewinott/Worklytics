// Libs
import { useEffect } from "react";

// Style
import * as S from './styles'

// Components
import PieContainer from "../../components/produtivity/pie-chart/main";
import BarChartContainer from "../../components/produtivity/bar-chart/main";
import PizzaContainer from "../../components/produtivity/pizza-chart/main";
import Header from "../../components/global/header/main";
import FilterDate from "../../components/produtivity/filter-data/main";
import { LineForms } from "../tickets/main-container/styles";

// Contexts
import { useTicket } from "../../contexts/ticketsContext";

const ProdutivityContainer = () => {
    const { handleGetTickets } = useTicket();

    useEffect(() => {
        handleGetTickets();
    }, [])

    return (
        <S.MainContainer>
            <Header mainTitle="Controle de Produtividade" subTitle="Aplique os filtros abaixo e confira a sua produtividade de acordo com a data"/>
            <LineForms/>
            <FilterDate/>

            <S.GraphicContainer>
                <PieContainer />
                <BarChartContainer />
                <PizzaContainer />
            </S.GraphicContainer>
        </S.MainContainer>
    )
}

export default ProdutivityContainer