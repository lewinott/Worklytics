import React from "react";
import * as S from './styles'

interface SecondaryButtonProps {
    onClick: () => void,
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick }) =>{
    return(
        <S.ButtonBackground onClick={onClick}>
           Marcar todos
        </S.ButtonBackground>
    )
}

export default SecondaryButton