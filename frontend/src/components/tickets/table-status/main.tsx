import { useState } from "react";
import * as S from "./styles";
import { useEffect } from "react";

interface TableStatusProps{
  statusValue: string,
  setStatusValue: (status: string) => void,
}

const TableStatus: React.FC<TableStatusProps> = ({ statusValue, setStatusValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "default",
    label: "status",
    color: "#ccc", 
  });

  const options = [
    { value: "opcao1", label: "Em espera", color: "#FFCF00" },
    { value: "opcao2", label: "Resolvido", color: "#37A264" }, 
    { value: "opcao3", label: "Pendente", color: "#FF6E6F" },
  ];

  

  useEffect(() => {
    if(statusValue === "Em espera") setSelectedOption(options[0]);
    if(statusValue === "Resolvido") setSelectedOption(options[1]);
    if(statusValue === "Pendente") setSelectedOption(options[2]);
  }, [statusValue]);

  const handleSelect = (option: { value: string; label: string; color: string }) => {
    setStatusValue(option.label);
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
