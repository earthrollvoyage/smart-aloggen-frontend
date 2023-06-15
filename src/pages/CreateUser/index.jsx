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
import { userRows } from "../../data/dummy";

const CreateUserContainer = styled(InnerPageContainer)`
  flex: unset;
  min-height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  align-items: unset;
`;

const CreateUserWrapper = styled.div`
  display: flex;
`;

const CreateUserSidebarWrapper = styled.div`
  flex: 1;
  padding-top: 20px;
`;

const CreateUserContentWrapper = styled.div`
  flex: 5;
  padding: 20px;
`;

const CreateUserTitleContent = styled.h1``;

const CreateUserFormContent = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const CreateUserFormItemContent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const CreateUserFormLabelContent = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const CreateUserFormInputContent = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const CreateUserFormRadioInputWrapper = styled.div`
  /* margin-top: 15px; */
  display: flex;
  align-items: center;
`;

const CreateUserFormLabelRadioContent = styled.label`
  margin: 10px;
  font-size: 14px;
  color: #555;
`;

const CreateUserFormSelector = styled.select`
  height: 40px;
  border-radius: 5px;
`;

const CreateUserFormButton = styled.button`
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

// color: rgb(73, 140, 200);
const CreateUser = () => {
  return (
    <CreateUserContainer>
      <Topbar />
      <CreateUserWrapper>
        <CreateUserSidebarWrapper>
          <Sidebar />
        </CreateUserSidebarWrapper>
        <CreateUserContentWrapper>
          <CreateUserTitleContent>New User</CreateUserTitleContent>
          <CreateUserFormContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Username</CreateUserFormLabelContent>
              <CreateUserFormInputContent type="text" placeholder="Earth" />
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Full Name</CreateUserFormLabelContent>
              <CreateUserFormInputContent
                type="text"
                placeholder="Earth roll"
              />
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Email</CreateUserFormLabelContent>
              <CreateUserFormInputContent
                type="email"
                placeholder="earthroll@gmail.com"
              />
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Password</CreateUserFormLabelContent>
              <CreateUserFormInputContent
                type="password"
                placeholder="Password"
              />
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Phone</CreateUserFormLabelContent>
              <CreateUserFormInputContent
                type="text"
                placeholder="+66 95-952-2949"
              />
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Address</CreateUserFormLabelContent>
              <CreateUserFormInputContent
                type="text"
                placeholder="Bangkok | Thailand"
              />
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Gender</CreateUserFormLabelContent>
              <CreateUserFormRadioInputWrapper>
                <CreateUserFormInputContent
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
                <CreateUserFormLabelRadioContent for="male">
                  Male
                </CreateUserFormLabelRadioContent>
                <CreateUserFormInputContent
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <CreateUserFormLabelRadioContent for="female">
                  Female
                </CreateUserFormLabelRadioContent>
                <CreateUserFormInputContent
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                />
                <CreateUserFormLabelRadioContent for="other">
                  Other
                </CreateUserFormLabelRadioContent>
              </CreateUserFormRadioInputWrapper>
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormLabelContent>Active</CreateUserFormLabelContent>
              <CreateUserFormSelector name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </CreateUserFormSelector>
            </CreateUserFormItemContent>
            <CreateUserFormItemContent>
              <CreateUserFormButton>Create</CreateUserFormButton>
            </CreateUserFormItemContent>
          </CreateUserFormContent>
        </CreateUserContentWrapper>
      </CreateUserWrapper>
    </CreateUserContainer>
  );
};

export default CreateUser;
