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
import UserAvatar from "../../images/avatar/3ca46bfcfa43ef92f2875eaaa3199af6.jpeg";
import { productRows } from "../../data/dummy";

const ProductListContainer = styled(InnerPageContainer)`
  flex: unset;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: unset;
`;

const ProductListWrapper = styled.div`
  display: flex;
`;

const ProductListSidebarWrapper = styled.div`
  flex: 1;
  padding-top: 20px;
`;

const ProductListContentWrapper = styled.div`
  flex: 5;
  padding-top: 20px;
`;

const TableCellWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const ProductCellImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const AnchorLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #6daaf0;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  margin-right: 20px;

  &:hover {
    filter: contrast(0.6);
  }
`;

const ActionCellDeleteIcon = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 170,
      renderCell: (params) => {
        return (
          <TableCellWrapper>
            <ProductCellImage
              src={params.row.img}
              alt="user-avatar-user-list"
            />
            {params.row.name}
          </TableCellWrapper>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <TableCellWrapper>
            <AnchorLink to={`/product/${params.row.id}`}>
              <BorderColorRounded />
            </AnchorLink>
            <ActionCellDeleteIcon onClick={() => handleDelete(params.row.id)} />
          </TableCellWrapper>
        );
      },
    },
  ];

  return (
    <ProductListContainer>
      <Topbar />
      <ProductListWrapper>
        <ProductListSidebarWrapper>
          <Sidebar />
        </ProductListSidebarWrapper>
        <ProductListContentWrapper>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={15}
            userRowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </ProductListContentWrapper>
      </ProductListWrapper>
    </ProductListContainer>
  );
};

export default ProductList;
