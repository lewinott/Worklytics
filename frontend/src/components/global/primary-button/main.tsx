import React from "react";
import * as S from './styles'

interface ButtonProps{
    description: string,
    onClick: () => void,
}
const PrimaryButton: React.FC<ButtonProps> = ({description, onClick}) =>{
    return(
        <S.ButtonBackground onClick={onClick} >
            {description}
        </S.ButtonBackground>
    )
}

export default PrimaryButton