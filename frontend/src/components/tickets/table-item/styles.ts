import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Tr = styled.tr`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 40px;
    border-bottom: 1px solid ${colors.boschblack};

    td{
        font-size: 16px;
    }
`

export const InputNumberTicket = styled.div`
    width: 180px;
    overflow-x: auto;
`