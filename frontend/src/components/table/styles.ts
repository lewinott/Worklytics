import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Table = styled.div`

    tr{     
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 90px;
        border-bottom: 1px solid ${colors.boschblack};

        td{
            font-size: 16px;
        }

    }

`