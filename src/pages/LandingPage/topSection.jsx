import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/landing_page/Home_page_aloggen_ver14.jpg";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -220px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(137, 196, 244, 0);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  padding-top: 700px;
  justify-content: center;
`;

const ButtonWrapper = styled.button`
  width: 52px;
  height: 45px;
  border: none;
  outline: none;
  color: rgb(73, 140, 200);
  margin-left: 25px;
  padding-top: 5px;
  font-size: ${({ size }) => (size ? size + "px" : "35px")};
  font-weight: 600;
  border-radius: 100px 100px 100px 100px;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  /* z-index: 10; */

  &:hover {
    color: #42a7ff;
  }

  &:focus {
    outline: none;
  }
`;

const TopSection = ({ children }) => {
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <TopSectionInnerContainer>
          <ButtonWrapper>
            <Link to="serviceCard" smooth={"easeInOutQuad"} duration={1500}>
              <BsArrowDownCircle />
            </Link>
          </ButtonWrapper>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
};

export default TopSection;
