import React, { useState } from "react";
import * as S from "./styles";


const TableStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "default",
    label: "Status",
    color: "#ccc", 
  });

  const options = [
    { value: "opcao1", label: "Em espera", color: "#FFCF00" },
    { value: "opcao2", label: "Concluído", color: "#37A264" }, 
    { value: "opcao3", label: "Pendente", color: "#FF6E6F" },
  ];

  const handleSelect = (option: { value: string; label: string; color: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <S.StatusCircle color={selectedOption.color} />
        {selectedOption.label}
        <S.Icon />
      </S.DropdownHeader>

      {isOpen && (
        <S.DropdownList>
          {options.map((option) => (
            <S.DropdownItem key={option.value} onClick={() => handleSelect(option)}>
              <S.StatusCircle color={option.color} />
              {option.label}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default TableStatus;
