import React, { useState } from 'react';
import { Body, ButtonSearch, Content, DetailItem, Header, HeaderMenu, ItemDropdown, Label, LeftContent, Page, RightContent, NavigateButton, Icon, Title, ButtonDetail } from "./style";
import Dropdown from "./common/dropdow/dropdow";
import HeaderOption from "./common/header";
import ProductItem from "./common/product";
import IcPrev from "../component/icon/arrow-prev.svg";

export const PageView = () => {
  const options = ["100tr", "200tr"];
  const label = "Tầm giá";
  const labelPk = "Phân Khúc";
  const optionPk = ["Xe tải nhẹ máy xăn", "Xe tải van", "Xe tải nhẹ máy dâu", "Xe tải trung", "Xe tải nặng", "Xe ben nhẹ", "Xe ben nặng", "Xe đầu kéo", "XXe chuyên dụng"];
  const labelTT = "Tải trọng";
  const optionTT = ["1 tấn", "2 tấn", "3 tấn", "4 tấn"];
  const optionLogo = ["https://thacoautobinhduong.vn/storage/logo/taibus-2024/truckbus/thacotruck3.png",
    "https://thacoauto.vn/storage/kiafrontier/kiafrontier.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mitsubishi_Fuso_logo.png/805px-Mitsubishi_Fuso_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3XzxPrcskaJqtsta7CkzDNzzT7pM4J0EPw&s"
  ];
  const products = [
    { image: "https://drive.gianhangvn.com/image/z4417868357912-9a5c47bfdf430e550979bc2c28f22436-2447769j31167.jpg", name: "Product 1", size: "Large", garage: "1 cửa hàng" },
    { image: "https://taitruonghai.com/wp-content/uploads/2023/06/gia-xe-tai-thaco-tf220.jpg", name: "Product 2", size: "Medium", garage: "2 cửa hàng" },
    { image: "https://drive.gianhangvn.com/image/z4417868357912-9a5c47bfdf430e550979bc2c28f22436-2447769j31167.jpg", name: "Product 1", size: "Large", garage: "3 cửa hàng" },
    { image: "https://taitruonghai.com/wp-content/uploads/2023/06/gia-xe-tai-thaco-tf220.jpg", name: "Product 2", size: "Medium", garage: "4 cửa hàng" },
    { image: "https://drive.gianhangvn.com/image/z4417868357912-9a5c47bfdf430e550979bc2c28f22436-2447769j31167.jpg", name: "Product 1", size: "Large", garage: "5 cửa hàng" },
    { image: "https://taitruonghai.com/wp-content/uploads/2023/06/gia-xe-tai-thaco-tf220.jpg", name: "Product 2", size: "Medium", garage: "6 cửa hàng" },
    { image: "https://drive.gianhangvn.com/image/z4417868357912-9a5c47bfdf430e550979bc2c28f22436-2447769j31167.jpg", name: "Product 1", size: "Large", garage: "7 cửa hàng" },
    { image: "https://taitruonghai.com/wp-content/uploads/2023/06/gia-xe-tai-thaco-tf220.jpg", name: "Product 2", size: "Medium", garage: "8 cửa hàng" },
    { image: "https://drive.gianhangvn.com/image/z4417868357912-9a5c47bfdf430e550979bc2c28f22436-2447769j31167.jpg", name: "Product 1", size: "Large", garage: "9 cửa hàng" },
    { image: "https://taitruonghai.com/wp-content/uploads/2023/06/gia-xe-tai-thaco-tf220.jpg", name: "Product 2", size: "Medium", garage: "10 cửa hàng" },
    { image: "https://drive.gianhangvn.com/image/z4417868357912-9a5c47bfdf430e550979bc2c28f22436-2447769j31167.jpg", name: "Product 1", size: "Large", garage: "11 cửa hàng" },
    { image: "https://taitruonghai.com/wp-content/uploads/2023/06/gia-xe-tai-thaco-tf220.jpg", name: "Product 2", size: "Medium", garage: "12 cửa hàng" },
  ];

  const [currentPosition, setCurrentPosition] = useState(0);
  const [headerOptionClicked, setHeaderOptionClicked] = useState(false);

  const scrollToPreviousProducts = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const scrollToNextProducts = () => {
    if (currentPosition < products.length - 3) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const displayedProducts = products.slice(currentPosition, currentPosition + 3);

  const handleHeaderOptionClick = () => {
    setHeaderOptionClicked(!headerOptionClicked); // Toggle state on click
  };

  return (
    <Page>
      <Header>
        <div onClick={handleHeaderOptionClick} >
          <HeaderOption items={optionLogo} />
        </div>
      </Header>
      <Body>
        <LeftContent>
          <HeaderMenu>
            <ButtonSearch>
              <Label>Bộ Lọc</Label>
            </ButtonSearch>
          </HeaderMenu>
          <div style={{ marginTop: 12 }}>
            <ItemDropdown>
              <Dropdown options={options} label={label} />
            </ItemDropdown>
            <ItemDropdown>
              <Dropdown options={optionTT} label={labelTT} />
            </ItemDropdown>
            <ItemDropdown>
              <Dropdown options={optionPk} label={labelPk} />
            </ItemDropdown>
          </div>
        </LeftContent>
        <RightContent>
          <Title>THACO TRUCK</Title>
          <div style={{ display: "flex" }}>
            <NavigateButton onClick={scrollToPreviousProducts} style={{ left: 0 }}>
              <Icon src={IcPrev} style={{ width: 32 }} />
            </NavigateButton>
            <Content>
              <DetailItem>
                {displayedProducts.map((product, index) => (
                  <ProductItem key={index} image={product.image} name={product.name} size={product.size} garage={product.garage} />
                ))}
              </DetailItem>
            </Content>
            <NavigateButton onClick={scrollToNextProducts} style={{ right: 0 }}>
              <Icon src={IcPrev} style={{ width: 32, transform: "rotate(180deg)" }} />
            </NavigateButton>
          </div>

        </RightContent>
      </Body>
    </Page>
  );
};
