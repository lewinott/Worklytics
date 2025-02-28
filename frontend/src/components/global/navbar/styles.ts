import styled from "styled-components"
import { colors } from "../../../styles/theme"

export const Supergraphic = styled.div`
    background-image: url('/public/svg/Bosch-Supergraphic_RGB.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 6px;
`

export const Logo = styled.div`
    background-image: url('/public/svg/Bosch_symbol_logo_black_red.svg');
    background-repeat: no-repeat;
    height: 100%;
    width: 129px;
`

export const IconLogin = styled.div`
    background-image: url('/public/svg/login.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 53px;
    margin: 14px 14px 14px 8px;
`

export const LabelLogin = styled.div`
    display: flex;
    flex-direction: row;
    width: 128px;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`

export const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 96px;
    width: 100%;
    padding: 24px 30px 24px 8px;
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 10%;
    width: 489px;
    
    li{
        list-style: none;
        cursor: pointer;
        &:hover{
            color: ${colors.boschblue50};
        }
    }
`

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 0px 33px 18px 24px;

    p{
        font-size: 24px;
        font-family: 'Bosch Sans Bold'
    }
`

export const GrayLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.boschgray90};
`