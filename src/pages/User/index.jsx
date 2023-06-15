import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
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
import UserAvatar from "../../images/avatar/3ca46bfcfa43ef92f2875eaaa3199af6.jpeg";

const UserContainer = styled(InnerPageContainer)`
  flex: unset;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: unset;
`;

const UserWrapper = styled.div`
  display: flex;
`;

const UserSidebarWrapper = styled.div`
  flex: 1;
  padding-top: 20px;
`;

const UserContentWrapper = styled.div`
  flex: 5;
  padding: 20px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserContentTitle = styled.h1`
  color: rgb(73, 140, 200);
`;

const UserContentNewCreateButton = styled.button`
  width: 80px;
  font-size: 16px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(73, 140, 200);
  color: #fff;
  cursor: pointer;
`;

const UserProfileContentContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const UserProfileContent = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
`;

const UserEditProfileContent = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -webkit-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
  -moz-box-shadow: 2px 2px 5px 4px rgba(73, 140, 200, 0.29);
`;

const UserProfileTopContent = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfileTopContentImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserProfileTopTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const UserProfileTopTitleUsername = styled.span`
  font-weight: 600;
`;

const UserProfileTopTitlePosition = styled.span`
  font-weight: 300;
`;

const UserProfileBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const UserProfileBottomTitleContent = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgb(175, 170, 170);
  margin: 10px 0px;
`;

const UserProfileBottomInfoContent = styled.div`
  display: flex;
  align-items: center;
  margin: 13px 0px;
  color: #444;
`;

const UserProfileBottomInfoTitleContent = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const UserProfileBottomPersonOutlineIcon = styled(PersonOutline)`
  font-size: 16px !important;
`;

const UserProfileBottomCalendarTodayIcon = styled(CalendarToday)`
  font-size: 16px !important;
`;

const UserProfileBottomPhoneAndroidIcon = styled(PhoneAndroid)`
  font-size: 16px !important;
`;

const UserProfileBottomEmailOutlinedIcon = styled(EmailOutlined)`
  font-size: 16px !important;
`;

const UserProfileBottomLocationSearchingIcon = styled(LocationSearching)`
  font-size: 16px !important;
`;

const UserTitleEditProfileContent = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const UserFormEditProfileContent = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UserInsideFormEditProfileLeftWrap = styled.div``;

const UserInsideFormEditProfileRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserInsideFormEditProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const UserInsideFormEditProfileLabel = styled.label`
  margin-bottom: 5px;
  font-style: 14px;
`;

const UserInsideFormEditProfileInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

const UserInsideFormEditProfileInputFile = styled.input`
  display: none;
`;

const UserInsideFormEditProfileInputFileIcon = styled(Publish)`
  cursor: pointer;
`;

const UserInsideFormEditProfileUploadWrap = styled.div`
  display: flex;
  align-items: center;
`;

const UserInsideFormEditProfileUploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const UserInsideFormEditProfileButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: rgb(73, 140, 200);
  color: #fff;
  font-weight: 600;
`;

const User = () => {
  return (
    <UserContainer>
      <Topbar />
      <UserWrapper>
        <UserSidebarWrapper>
          <Sidebar />
        </UserSidebarWrapper>
        <UserContentWrapper>
          <UserTitleContainer>
            <UserContentTitle>Edit User</UserContentTitle>
            <Link to="/user/create">
              <UserContentNewCreateButton>Create</UserContentNewCreateButton>
            </Link>
          </UserTitleContainer>
          <UserProfileContentContainer>
            <UserProfileContent>
              <UserProfileTopContent>
                <UserProfileTopContentImage
                  src={UserAvatar}
                  alt="user-avatar-edit-profile"
                />
                <UserProfileTopTitleContent>
                  <UserProfileTopTitleUsername>
                    Anna Becker
                  </UserProfileTopTitleUsername>
                  <UserProfileTopTitlePosition>
                    Software Engineer
                  </UserProfileTopTitlePosition>
                </UserProfileTopTitleContent>
              </UserProfileTopContent>
              <UserProfileBottomContent>
                <UserProfileBottomTitleContent>
                  Account Details
                </UserProfileBottomTitleContent>
                <UserProfileBottomInfoContent>
                  <UserProfileBottomPersonOutlineIcon />
                  <UserProfileBottomInfoTitleContent>
                    Earthroll
                  </UserProfileBottomInfoTitleContent>
                </UserProfileBottomInfoContent>
                <UserProfileBottomInfoContent>
                  <UserProfileBottomCalendarTodayIcon />
                  <UserProfileBottomInfoTitleContent>
                    Jan 13, 1996
                  </UserProfileBottomInfoTitleContent>
                </UserProfileBottomInfoContent>
                <UserProfileBottomTitleContent>
                  Contact Details
                </UserProfileBottomTitleContent>
                <UserProfileBottomInfoContent>
                  <UserProfileBottomPhoneAndroidIcon />
                  <UserProfileBottomInfoTitleContent>
                    +66 95-952-2949
                  </UserProfileBottomInfoTitleContent>
                </UserProfileBottomInfoContent>
                <UserProfileBottomInfoContent>
                  <UserProfileBottomEmailOutlinedIcon />
                  <UserProfileBottomInfoTitleContent>
                    earthroll@gmail.com
                  </UserProfileBottomInfoTitleContent>
                </UserProfileBottomInfoContent>
                <UserProfileBottomInfoContent>
                  <UserProfileBottomLocationSearchingIcon />
                  <UserProfileBottomInfoTitleContent>
                    Bangkok | Thailand
                  </UserProfileBottomInfoTitleContent>
                </UserProfileBottomInfoContent>
              </UserProfileBottomContent>
            </UserProfileContent>
            <UserEditProfileContent>
              <UserTitleEditProfileContent>Edit</UserTitleEditProfileContent>
              <UserFormEditProfileContent>
                <UserInsideFormEditProfileLeftWrap>
                  <UserInsideFormEditProfileItem>
                    <UserInsideFormEditProfileLabel>
                      Username
                    </UserInsideFormEditProfileLabel>
                    <UserInsideFormEditProfileInput
                      type="text"
                      placeholder="Earthroll"
                    />
                  </UserInsideFormEditProfileItem>
                  <UserInsideFormEditProfileItem>
                    <UserInsideFormEditProfileLabel>
                      Full Name
                    </UserInsideFormEditProfileLabel>
                    <UserInsideFormEditProfileInput
                      type="text"
                      placeholder="Anna Becker"
                    />
                  </UserInsideFormEditProfileItem>
                  <UserInsideFormEditProfileItem>
                    <UserInsideFormEditProfileLabel>
                      Email
                    </UserInsideFormEditProfileLabel>
                    <UserInsideFormEditProfileInput
                      type="email"
                      placeholder="earthroll@gmail.com"
                    />
                  </UserInsideFormEditProfileItem>
                  <UserInsideFormEditProfileItem>
                    <UserInsideFormEditProfileLabel>
                      Phone
                    </UserInsideFormEditProfileLabel>
                    <UserInsideFormEditProfileInput
                      type="text"
                      placeholder="+66 95-952-2949"
                    />
                  </UserInsideFormEditProfileItem>
                  <UserInsideFormEditProfileItem>
                    <UserInsideFormEditProfileLabel>
                      Address
                    </UserInsideFormEditProfileLabel>
                    <UserInsideFormEditProfileInput
                      type="text"
                      placeholder="Bangkok | Thailand"
                    />
                  </UserInsideFormEditProfileItem>
                </UserInsideFormEditProfileLeftWrap>
                <UserInsideFormEditProfileRightWrap>
                  <UserInsideFormEditProfileUploadWrap>
                    <UserInsideFormEditProfileUploadImage
                      src={UserAvatar}
                      alt="user-avatar-upload"
                    />
                    <UserInsideFormEditProfileLabel htmlFor="file">
                      <UserInsideFormEditProfileInputFileIcon />
                    </UserInsideFormEditProfileLabel>
                    <UserInsideFormEditProfileInputFile type="file" id="file" />
                  </UserInsideFormEditProfileUploadWrap>
                  <UserInsideFormEditProfileButton>
                    Update
                  </UserInsideFormEditProfileButton>
                </UserInsideFormEditProfileRightWrap>
              </UserFormEditProfileContent>
            </UserEditProfileContent>
          </UserProfileContentContainer>
        </UserContentWrapper>
      </UserWrapper>
    </UserContainer>
  );
};

export default User;
