import React from "react";
import Topbar from "../../components/topbar";
import Sidebar from "../../components/sidebar/oldCode";
import Dashboard from "../Dashboard";
import { InnerPageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { data } from "../../data/dummy";

const HomePageContainer = styled(InnerPageContainer)`
    flex: unset;
    min-height: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
    align-items: unset;
`;

const HomePageWrapper = styled.div`
    display: flex;
`;

const HomePageSidebarWrapper = styled.div`
    flex: 1;
    padding-top: 20px;
`;

const HomePageContentWrapper = styled.div`
    flex: 5;
    padding-top: 20px;
`;

const HomePage = () => {
  return (   
    <HomePageContainer>
      <Topbar />
      <HomePageWrapper>
        <HomePageSidebarWrapper>
            <Sidebar />
        </HomePageSidebarWrapper>
        <HomePageContentWrapper>
            <Dashboard data={ data }/>
        </HomePageContentWrapper>
      </HomePageWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
