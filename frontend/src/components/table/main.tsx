import React from "react";
import * as S from './styles'
import Checkbox from "../checkbox/main";
import TableStatus from "../table-status/main";

const Table = () =>{
    return(
        <S.Table>
            <tr>
                <td><Checkbox/></td>
                <td>0000000000000000</td>
                <td><TableStatus/></td>
                <td>00/00/00 23:00</td>
            </tr>
        </S.Table>
    )
}

export default Table