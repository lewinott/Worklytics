import React from "react";
import * as S from './styles'

interface HeaderProps{
    mainTitle: string,
    subTitle: string,
}

const Header: React.FC<HeaderProps> = ({mainTitle, subTitle}) => {
    return (
        <S.BackgroundHeader>
            <h1>{mainTitle}</h1>
            <p>{subTitle}</p>
        </S.BackgroundHeader>
    )
}

export default Header