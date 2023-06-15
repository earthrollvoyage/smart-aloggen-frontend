import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import LineChartAnalytics from "../../components/chart/lineChart";
import Sidebar from "../../components/sidebar/oldCode";
import Topbar from "../../components/topbar";
import {
  Person,
  PersonOutline,
  CalendarToday,
  PhoneAndroid,
  EmailOutlined,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import ProductAvatar from "../../images/avatar/3ca46bfcfa43ef92f2875eaaa3199af6.jpeg";
import { productData } from "../../data/dummy";

const ProductContainer = styled(InnerPageContainer)`
  flex: unset;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: unset;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

const ProductSidebarWrapper = styled.div`
  flex: 1;
  padding-top: 20px;
`;

const ProductContentWrapper = styled.div`
  flex: 5;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductContentTitle = styled.h1`
  color: rgb(73, 140, 200);
`;

const ProductContentNewCreateButton = styled.button`
  width: 80px;
  font-size: 16px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(73, 140, 200);
  color: #fff;
  cursor: pointer;
`;

const ProductContentTop = styled.div`
  display: flex;
`;

const ProductContentTopLeft = styled.div`
  flex: 1;
`;

const ProductContentTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
`;

const ProductContentTopRightInfo = styled.div``;

const ProductContentTopRightTopInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductContentTopRightTopInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductContentTopRightTopInfoSpan = styled.span`
  font-weight: 600;
`;

const ProductContentTopRightBottomInfo = styled.div`
  margin-top: 10px;
`;

const ProductContentTopRightBottomInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const ProductContentTopRightBottomInfoSpan = styled.span`
  font-weight: ${({ type }) => (type === "value" ? "300" : "600")};
`;

const ProductContentBottom = styled.div`
  padding: 20px;
  margin: 20px;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
`;

const ProductContentBottomForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductContentBottomFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductContentBottomFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductContentBottomLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const ProductContentBottomFormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const ProductContentBottomFormSelector = styled.select`
  margin-bottom: 10px;
`;

const ProductContentBottomFormUploadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductContentBottomFormUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductContentBottomFormUploadLabel = styled.label``;

const ProductContentBottomFormUploadInput = styled.input`
  display: none;
`;

const ProductContentBottomFormUploadButton = styled.button`
  font-weight: 600;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(73, 140, 200);
  color: #fff;
  cursor: pointer;
`;

const Product = () => {
  return (
    <ProductContainer>
      <Topbar />
      <ProductWrapper>
        <ProductSidebarWrapper>
          <Sidebar />
        </ProductSidebarWrapper>
        <ProductContentWrapper>
          <ProductTitleContainer>
            <ProductContentTitle>Product</ProductContentTitle>
            <Link to="/product/create">
              <ProductContentNewCreateButton>
                Create
              </ProductContentNewCreateButton>
            </Link>
          </ProductTitleContainer>
          <ProductContentTop>
            <ProductContentTopLeft>
              <LineChartAnalytics
                title="Sales Performance "
                data={productData}
                dataKey="Sales"
              />
            </ProductContentTopLeft>
            <ProductContentTopRight>
              <ProductContentTopRightInfo>
                <ProductContentTopRightTopInfo>
                  <ProductContentTopRightTopInfoImg
                    src={ProductAvatar}
                    alt="product-image"
                  />
                  <ProductContentTopRightTopInfoSpan>
                    Apple Airpods
                  </ProductContentTopRightTopInfoSpan>
                </ProductContentTopRightTopInfo>
                <ProductContentTopRightBottomInfo>
                  <ProductContentTopRightBottomInfoItem>
                    <ProductContentTopRightBottomInfoSpan type={"name"}>
                      id:
                    </ProductContentTopRightBottomInfoSpan>
                    <ProductContentTopRightBottomInfoSpan type={"value"}>
                      123
                    </ProductContentTopRightBottomInfoSpan>
                  </ProductContentTopRightBottomInfoItem>
                  <ProductContentTopRightBottomInfoItem>
                    <ProductContentTopRightBottomInfoSpan type={"name"}>
                      sales:
                    </ProductContentTopRightBottomInfoSpan>
                    <ProductContentTopRightBottomInfoSpan type={"value"}>
                      123
                    </ProductContentTopRightBottomInfoSpan>
                  </ProductContentTopRightBottomInfoItem>
                  <ProductContentTopRightBottomInfoItem>
                    <ProductContentTopRightBottomInfoSpan type={"name"}>
                      active:
                    </ProductContentTopRightBottomInfoSpan>
                    <ProductContentTopRightBottomInfoSpan type={"value"}>
                      yes
                    </ProductContentTopRightBottomInfoSpan>
                  </ProductContentTopRightBottomInfoItem>
                  <ProductContentTopRightBottomInfoItem>
                    <ProductContentTopRightBottomInfoSpan type={"name"}>
                      in stock:
                    </ProductContentTopRightBottomInfoSpan>
                    <ProductContentTopRightBottomInfoSpan type={"value"}>
                      no
                    </ProductContentTopRightBottomInfoSpan>
                  </ProductContentTopRightBottomInfoItem>
                </ProductContentTopRightBottomInfo>
              </ProductContentTopRightInfo>
            </ProductContentTopRight>
          </ProductContentTop>
          <ProductContentBottom>
            <ProductContentBottomForm>
              <ProductContentBottomFormLeft>
                <ProductContentBottomLabel>
                  Product Name
                </ProductContentBottomLabel>
                <ProductContentBottomFormInput
                  type="text"
                  placeholder="Apple AirPods"
                />
                <ProductContentBottomLabel>In Stock</ProductContentBottomLabel>
                <ProductContentBottomFormSelector name="inStock" id="inStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </ProductContentBottomFormSelector>
                <ProductContentBottomLabel>Active</ProductContentBottomLabel>
                <ProductContentBottomFormSelector name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </ProductContentBottomFormSelector>
              </ProductContentBottomFormLeft>
              <ProductContentBottomFormRight>
                <ProductContentBottomFormUploadWrapper>
                  <ProductContentBottomFormUploadImg
                    src={ProductAvatar}
                    alt="upload-product-image"
                  />
                  <ProductContentBottomFormUploadLabel>
                    <Publish />
                  </ProductContentBottomFormUploadLabel>
                  <ProductContentBottomFormUploadInput type="file" id="file" />
                </ProductContentBottomFormUploadWrapper>
                <ProductContentBottomFormUploadButton>
                  Update
                </ProductContentBottomFormUploadButton>
              </ProductContentBottomFormRight>
            </ProductContentBottomForm>
          </ProductContentBottom>
        </ProductContentWrapper>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;
