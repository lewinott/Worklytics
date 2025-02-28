import React, { useState } from "react";
import * as S from "./styles";
import Checkbox from "../checkbox/main";

const TableStatus = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const options = [
        { value: "opcao1", label: "Em espera" },
        { value: "opcao2", label: "Pendente" },
    ];

    const toggleOption = (option: { value: string; label: string }) => {
        setSelectedOptions((prev) =>
            prev.includes(option.label)
                ? prev.filter((item) => item !== option.label)
                : [...prev, option.label]
        );
    };

    const clearSelected = () => {
        setSelectedOptions([]);
    };

    return (
        <S.DropdownContainer>
            <S.DropdownHeader onClick={() => setIsOpen(!isOpen)}>
                <S.IconFilter />
                Filtrar 
            </S.DropdownHeader>

            {isOpen && (
                <S.DropdownList>
                    {options.map((option) => (
                        <S.DropdownItem key={option.value}>
                            <Checkbox
                                checked={selectedOptions.includes(option.label)}
                                onChange={() => toggleOption(option)}
                            />
                            {option.label}
                        </S.DropdownItem>
                    ))}

                    {selectedOptions.length > 0 && (
                        <>
                            <S.SelectedFilters>
                                {selectedOptions.map((option) => (
                                    <S.FilterTag key={option}>
                                        {option}
                                        <S.RemoveFilter onClick={() => toggleOption({ value: "", label: option })}>
                                            X
                                        </S.RemoveFilter>
                                    </S.FilterTag>
                                ))}
                            </S.SelectedFilters>

                            <S.ClearFilters onClick={clearSelected}>
        
                                Remova todos os filtros
                            </S.ClearFilters>
                        </>
                    )}
                </S.DropdownList>
            )}
        </S.DropdownContainer>
    );
};

export default TableStatus;
