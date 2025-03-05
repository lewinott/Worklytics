import React, { useState } from "react";
import * as S from './styles'

interface SelectStatusProps {
  handleChange: (ticketId: string) => void,
}

const SelectStatus: React.FC<SelectStatusProps> = ({ handleChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Status");
  
    const options = [
      { value: "opcao1", label: "Em espera" },
      { value: "opcao2", label: "Concluído" },
      { value: "opcao3", label: "Pendente" },
    ];
  
    const handleSelect = (option: { value: string; label: string }) => {
      setSelectedOption(option.label);
      setIsOpen(false);
      
      handleChange(option.label);
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