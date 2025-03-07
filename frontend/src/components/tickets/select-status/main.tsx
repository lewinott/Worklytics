import React, { useState } from "react";
import * as S from './styles'

interface SelectStatusProps {
  setSelectedOption: (ticketId: string) => void,
  selectedOption: string,
}

const SelectStatus: React.FC<SelectStatusProps> = ({ selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const options = [
      { value: "opcao1", label: "Em espera" },
      { value: "opcao2", label: "Resolvido" },
      { value: "opcao3", label: "Pendente" },
    ];
  
    const handleSelect = (option: { value: string; label: string }) => {
      setSelectedOption(option.label);
      setIsOpen(false);
    };
  
    return (
      <S.DropdownContainer>

        <S.DropdownHeader onClick={() => setIsOpen(!isOpen)}>
          {selectedOption} <S.Icon />
        </S.DropdownHeader>
        
        {isOpen && (
          <S.DropdownList>
            {options.map((option) => (
              <S.DropdownItem key={option.value} onClick={() => handleSelect(option)}>
                {option.label}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}

      </S.DropdownContainer>
    );
  };

export default SelectStatus