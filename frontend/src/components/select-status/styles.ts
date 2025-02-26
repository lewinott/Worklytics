import { colors } from "../../styles/theme";
import styled from "styled-components";


export const Icon = styled.div`
    background-image: url('/public/svg/arrow-up-down 1.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 10%;
`

export const DropdownContainer = styled.div`
    position: relative;
    width: 240px;
`;

export const DropdownHeader = styled.div`
    font-size: 16px;
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    background-color: ${colors.boschgray90};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background-color: ${colors.boschgray80};
    }

`;

export const DropdownList = styled.ul`
    position: absolute;
    width: 100%;
    background: ${colors.boschwhite};
    list-style: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const DropdownItem = styled.li`
    font-size: 16px;
    padding: 10px 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: ${colors.boschblue50};
        color: ${colors.boschwhite};
    }
`;