import React from "react";
import styled from "styled-components";
import AccoutBox from "../../components/accountBox";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import {InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

const UserAccessPage = () => {
  const { action } = useParams();
  console.log('Action :', action)

  return (
    <PageContainer>
      <Navbar useTransparent={false} />
      <StyledInnerContainer>
        <AccoutBox initialActive={action} />
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
};

export default UserAccessPage;
