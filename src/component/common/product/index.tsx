import React from 'react';
import styled from 'styled-components';
import { ButtonDetail, Label } from '../../style';

interface ProductItemProps {
    image: string;
    name: string;
    size: string;
    garage?: string;
}

const ProductContainer = styled.div`
  margin-bottom: 12px;
  padding: 20px;
`;

const ProductImage = styled.img`
  height: 160px;
  object-fit: cover;
  margin-right: 12px;
  display: block;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductContent = styled.div`
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

const ProductItem: React.FC<ProductItemProps> = ({ image, name, size, garage }) => {
    return (
        <ProductContainer>
            <ProductImage src={image} alt={name} />
            <ProductInfo>
                <ProductContent>
                    <div>
                        Tải trọng:
                    </div>
                    <div>
                        {name}
                    </div>
                </ProductContent>
                <ProductContent><div>Chiều dài thùng: </div>
                    <div>
                        {size}
                    </div></ProductContent>
                <ProductContent><div>Dịch vụ 24/7:
                </div><div>{garage}
                    </div></ProductContent>

            </ProductInfo>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
                <ButtonDetail>
                    <Label>Xem chi tiết</Label>
                </ButtonDetail>
            </div>

        </ProductContainer>
    );
};

export default ProductItem;
