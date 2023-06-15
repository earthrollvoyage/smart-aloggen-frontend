import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import Sidebar from "../../components/sidebar/oldCode";
import Topbar from "../../components/topbar";
import { DataGrid } from "@mui/x-data-grid";
import {
  ModeEdit,
  BorderColorRounded,
  DeleteOutline,
} from "@material-ui/icons";
import ProductAvatar from "../../images/avatar/3ca46bfcfa43ef92f2875eaaa3199af6.jpeg";
import { productRows } from "../../data/dummy";

const CreateProductContainer = styled(InnerPageContainer)`
  flex: unset;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: unset;
`;

const CreateProductWrapper = styled.div`
  display: flex;
`;

const CreateProductSidebarWrapper = styled.div`
  flex: 1;
  padding-top: 20px;
`;

const CreateProductContentWrapper = styled.div`
  flex: 5;
  padding: 20px;
`;

const CreateProductTitleContent = styled.h1``;

const CreateProductFormContent = styled.form`
  margin-top: 10px;
`;

const CreateProductFormItemContent = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const CreateProductFormLabelContent = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const CreateProductFormInputContent = styled.input`
  padding: 10px;
`;

const CreateProductFormSelector = styled.select`
  height: 40px;
  border-radius: 5px;
`;

const CreateProductFormButton = styled.button`
  width: 200px;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  border: none;
  background-color: rgb(73, 140, 200);
  color: #fff;
  cursor: pointer;
`;

const CreateProduct = () => {
  return (
    <CreateProductContainer>
      <Topbar />
      <CreateProductWrapper>
        <CreateProductSidebarWrapper>
          <Sidebar />
        </CreateProductSidebarWrapper>
        <CreateProductContentWrapper>
          <CreateProductTitleContent>New Product</CreateProductTitleContent>
          <CreateProductFormContent>
            <CreateProductFormItemContent>
              <CreateProductFormLabelContent>
                Image
              </CreateProductFormLabelContent>
              <CreateProductFormInputContent type="file" id="file" />
            </CreateProductFormItemContent>
            <CreateProductFormItemContent>
              <CreateProductFormLabelContent>
                Name
              </CreateProductFormLabelContent>
              <CreateProductFormInputContent
                type="text"
                placeholder="Apple Airpods"
              />
            </CreateProductFormItemContent>
            <CreateProductFormItemContent>
              <CreateProductFormLabelContent>
                Stock
              </CreateProductFormLabelContent>
              <CreateProductFormInputContent type="text" placeholder="123" />
            </CreateProductFormItemContent>
            <CreateProductFormItemContent>
              <CreateProductFormLabelContent>
                Active
              </CreateProductFormLabelContent>
              <CreateProductFormSelector name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </CreateProductFormSelector>
            </CreateProductFormItemContent>
            <CreateProductFormItemContent>
              <CreateProductFormButton>Create</CreateProductFormButton>
            </CreateProductFormItemContent>
          </CreateProductFormContent>
        </CreateProductContentWrapper>
      </CreateProductWrapper>
    </CreateProductContainer>
  );
};

export default CreateProduct;
