// Libs
import { useEffect, useState } from "react";

// Style
import * as S from './styles'

// Components
import PieContainer from "../../components/produtivity/pie-chart/main";
import BarChartContainer from "../../components/produtivity/bar-chart/main";
import PizzaContainer from "../../components/produtivity/pizza-chart/main";
import TextChartContainer from "../../components/produtivity/text-chart/main";
import Header from "../../components/global/header/main";
import FilterDate from "../../components/produtivity/filter-data/main";
import { LineForms } from "../tickets/main-container/styles";

// Contexts
import { useTicket } from "../../contexts/ticketsContext";

// Types
import { ticketType } from "../../utils/types";

const ProdutivityContainer = () => {
    const { handleGetTickets, tickets } = useTicket();
    const [dateFilterTickets, setDateFilterTickets] = useState<ticketType[]>([]);
    const [selectDate, setSelectDate] = useState<{startDate: Date, endDate: Date} | null>(null);
    const [ totalDaysSelected, setTotalDaysSelected] = useState(1);

    useEffect(() => {
        handleGetTickets();
    }, [])

    const filterDataByDate = () => {
        const newTickets = tickets;
        
        let startDate: number;
        let endDate: number;
        if(selectDate){
            startDate = selectDate.startDate.setHours(0, 0, 0, 0);
            endDate = selectDate.endDate.setHours(0, 0, 0, 0);

            setTotalDaysSelected((endDate - startDate) / (1000 * 60 * 60 * 24)+1)
        }
        setDateFilterTickets(
            newTickets.filter((item) => {
                const itemDate = new Date(item.creation_date + "T00:00:00").setHours(0, 0, 0, 0);

                return itemDate >= startDate && itemDate <= endDate;
            }
        ));
    };

    useEffect(() => {
        filterDataByDate();
    }, [tickets, selectDate])
    
    return (
        <S.MainContainer>
            <Header mainTitle="Controle de Produtividade" subTitle="Aplique os filtros abaixo e confira a sua produtividade de acordo com a data"/>
            <LineForms/>
            <FilterDate setSelectDate={setSelectDate} />

            <S.GraphicContainer>
                {
                    !(totalDaysSelected > 1) ?
                        <PieContainer dateFilterTickets={dateFilterTickets} />
                    :
                        <>
                            <TextChartContainer title="Tickets Respondidos" numberTickets={dateFilterTickets.length} />
                        </>
                }
                <BarChartContainer dateFilterTickets={dateFilterTickets} />
                <PizzaContainer />
            </S.GraphicContainer>
        </S.MainContainer>
    )
}

export default ProdutivityContainer