import React from "react";
import * as S from './styles'

interface ButtonProps{
    description: string,
}
const PrimaryButton: React.FC<ButtonProps> = ({description}) =>{
    return(
        <S.ButtonBackground>
            {description}
        </S.ButtonBackground>
    )
}

export default PrimaryButton