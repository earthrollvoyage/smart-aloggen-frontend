import React from "react";
import TopAvatarImage from "../../images/avatar/Florzinho.jpeg";
import {
  NotificationsNone,
  Language,
  GTranslate,
  Translate,
  Settings,
  Menu,
} from "@material-ui/icons";
import BrandLogo from "../brandLogo";
import styled from "styled-components";

const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  margin-top: 3.5px;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 25px;
  color: rgb(73, 140, 200);
  letter-spacing: 1px;
  cursor: pointer;
`;

const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 30px;
  color: #555;
  margin-top: 3.5px;
`;

const TopbarAvatarContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 30px;
  margin-top: 3.5px;
`;

const TopIconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -1px;
  left: 12px;
  /* right: 0px; */
  background-color: red;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const TopbarLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarLeftMenuIcon = styled(Menu)`
  margin-right: 20px;
`;

const Topbar = ({ showSidebar}) => {
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopLeft>
          <TopbarLeftWrapper>
            <TopbarLeftMenuIcon onClick={ showSidebar } />
            <BrandLogo logoSize={60} />
          </TopbarLeftWrapper>
          {/* <span className='logo'>SMART ALOGGEN</span> */}
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopbarAvatarContainer>
            <TopAvatar
              src={TopAvatarImage}
              alt="top-avatar-profile"
              className="topAvatar"
            />
          </TopbarAvatarContainer>
        </TopRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
