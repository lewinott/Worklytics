import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const Table = styled.div`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    tr{     
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 60px;
        border-bottom: 1px solid ${colors.boschblack};

        td{
            font-size: 16px;
        }

    }

`