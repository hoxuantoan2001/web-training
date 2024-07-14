// Dropdown.tsx
import React, { useState } from 'react';
import IconDropdown from "../../icon/ic_dropdown.svg";
import styled from 'styled-components';
import { ButtonDropdown } from './styled';

interface DropdownProps {
  options: string[];
  label: string;
}

const DropdownContainer = styled.div`
`;

const RotateIcon = styled.img<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(0deg)')};
`;

const LabelWrapper = styled.div`
  display: inline-block;
  margin-right: 40px;
  cursor: pointer; /* Thêm CSS để biến con trỏ thành pointer khi hover */
`;

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    if (selectedValues.includes(option)) {
      setSelectedValues(selectedValues.filter((value) => value !== option));
    } else {
      setSelectedValues([...selectedValues, option]);
    }
  };

  const handleLabelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <div onClick={handleLabelClick} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <LabelWrapper >
          {label}
        </LabelWrapper>
        <ButtonDropdown onClick={toggleDropdown}>
          <RotateIcon src={IconDropdown} isOpen={isOpen} />
        </ButtonDropdown>

      </div>

      {isOpen && (
        <div>
          {options.map((option) => (
            <div key={option} style={{
              height: 32,
              marginLeft: 12
            }}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={selectedValues.includes(option)}
                onChange={handleChange}
                style={{ width: 16, height: 16, marginRight: 8 }}

              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
