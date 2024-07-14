import React, { useState } from 'react';
import styled from 'styled-components';

interface HeaderOptionProps {
    items: (string | { image: string; url: string })[]; // Array containing URLs or objects with image and url
}

const HeaderOptionContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`;

const ImageWrapper = styled.img<{ isSelected: boolean }>`
    margin-right: 20px;
    max-height: 60px;
    cursor: pointer;
    border-bottom: ${props => (props.isSelected ? '2px solid blue' : 'none')};
`;

const HeaderOption: React.FC<HeaderOptionProps> = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedItem(index === selectedItem ? null : index);
    };

    return (
        <HeaderOptionContainer>
            {items.map((item, index) => (
                <ImageWrapper
                    key={index}
                    src={typeof item === 'string' ? item : item.image}
                    alt={`Image ${index}`}
                    isSelected={index === selectedItem}
                    onClick={() => handleClick(index)}
                />
            ))}
        </HeaderOptionContainer>
    );
};

export default HeaderOption;
