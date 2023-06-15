import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Dashboard from "../Dashboard";
import { InnerPageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { data, dataPie } from "../../data/dummy";

const MainPageContainer = styled(InnerPageContainer)`
  flex: unset;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: unset;
`;

const MainPageWrapper = styled.div`
  display: flex;
`;

const MainPageSidebarWrapper = styled.div`
  /* flex: ${({ sidebarActive }) => sidebarActive ? 1 : 0.1}; */
  /* padding-top: 20px; */
`;

const MainPageContentWrapper = styled.div`
  flex: 4;
  /* flex: ${({ sidebarActive }) => sidebarActive ? 5 : 5}; */
  padding-top: 30px;
  padding-left: 10px;
`;

export default function Main() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const showSidebar = () => setSidebarActive(!sidebarActive);
  const { action } = useParams();
  console.log('Action :', action)

  return (
    <MainPageContainer>
      <Topbar showSidebar={ showSidebar }/>
      <MainPageWrapper>
        <MainPageSidebarWrapper sidebarActive={ sidebarActive }>
          <Sidebar sidebarActive={ sidebarActive } showSidebar={ showSidebar } />
        </MainPageSidebarWrapper>
        <MainPageContentWrapper>
          <Dashboard data={ data } dataPie={ dataPie } />
        </MainPageContentWrapper>
      </MainPageWrapper>
    </MainPageContainer>
  );
}
