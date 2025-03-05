import React from "react";
import * as S from './styles'
import PieContainer from "../../components/produtivity/pie-chart/main";
import BarChartContainer from "../../components/produtivity/bar-chart/main";
import PizzaContainer from "../../components/produtivity/pizza-chart/main";
import { Pie } from "recharts";

const ProdutivityContainer = () =>{
    return(
        <S.MainContainer>
            <PieContainer/>     
            <BarChartContainer/>
            <PizzaContainer/>         
        </S.MainContainer>
    )
}

export default ProdutivityContainer