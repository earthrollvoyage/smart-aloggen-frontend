import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../components/authentication";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import TopSection from "./topSection";
import { deviceSize } from "../../components/responsive";
import Services from "./services";
import SpecialistAd from "../../components/specialistAd";
import { Marginer } from "../../components/marginer";
import Footer from "../../components/footer";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em; ;
`;

const LandingPage = () => {
  const { currentUser, onResetUserDataWithOutSignin } = useContext(
    AuthenticationContext
  );
  // console.log("currentUser check1:", currentUser);
  useEffect(() => {
    // console.log("currentUser check eff:", currentUser);
    onResetUserDataWithOutSignin(currentUser);
  }, []);

  return (
    <PageContainer>
      {/* {
        currentUser ? (
          typeof currentUser === 'object' ? (
            'userConfirmed' in currentUser ? (
              <Redirect to='/user/access/confirm-signup' />
            ) : (
              <Redirect to='/user/access/signin' />
            )
          ) : (
            currentUser === 'The user is not authenticated' ? (
              <PageContainer>
                <Navbar />
                <TopSection />
                <InnerPageContainer>
                  <Marginer direction="vertical" margin="2em" />
                  <ContentContainer>
                    <Services />
                  </ContentContainer>
                  <Marginer direction="vertical" margin="2em" />
                  <SpecialistAd />
                  <Marginer direction="vertical" margin="2em" />
                </InnerPageContainer>
                <Footer />
              </PageContainer>
            ) : (
              <PageContainer>
                <p>Your're  logged in - <Link to='/dashboard'>View Dashboard</Link></p>
              </PageContainer>
            )
          )
        ) : (
          <PageContainer>
            <Navbar />
            <TopSection />
            <InnerPageContainer>
              <Marginer direction="vertical" margin="2em" />
              <ContentContainer>
                <Services />
              </ContentContainer>
              <Marginer direction="vertical" margin="2em" />
              <SpecialistAd />
              <Marginer direction="vertical" margin="2em" />
            </InnerPageContainer>
            <Footer />
          </PageContainer>
        )
      } */}

      {currentUser &&
      !currentUser.userConfirmed &&
      currentUser !== "The user is not authenticated" ? (
        <PageContainer>
          <p>
            Your're logged in - <Link to="/dashboard">View Dashboard</Link>
          </p>
        </PageContainer>
      ) : (
        <PageContainer>
          <Navbar />
          <TopSection />
          <InnerPageContainer>
            <Marginer direction="vertical" margin="2em" />
            <ContentContainer>
              <Services />
            </ContentContainer>
            <Marginer direction="vertical" margin="2em" />
            <SpecialistAd />
            <Marginer direction="vertical" margin="2em" />
          </InnerPageContainer>
          <Footer />
        </PageContainer>
      )}
    </PageContainer>
  );
};

export default LandingPage;
