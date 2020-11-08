import "react-perfect-scrollbar/dist/css/styles.css";

import { Avatar, Button } from "antd";

import AvatarUpload from "../components/uploadUserAvater";
import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import ScrollBar from "react-perfect-scrollbar";
import { StyledCard } from "../components/styledElement/index-v2";
import UserProfileUpdateForm from "../components/userProfileUpdateForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

function UserInfo() {
  const user = useSelector((state) => state.userData.user);

  return (
    <StyledDiv>
      <ScrollBar>
        <StyledCard style={{ width: "350px" }}>
          <div className="row  bg-light m-0">
            <div className="row  mx-auto py-3">
              <div className="col-md-8 my-auto ">
                <Avatar
                  size={120}
                  src={user.photoURL}
                  className="d-block m-auto"
                />
                <span className="d-flex justify-content-center ">
                  <h3 className="badge font-14 ">{user.displayName}</h3>
                  <Button danger size="small">
                    <LogoutOutlined />
                  </Button>
                </span>
              </div>
              <div className="col-md-4 m-0 p-0 my-auto">
                <AvatarUpload />
              </div>
            </div>

            <div className="row  mx-auto">
              <div className="col-md-12">
                <UserProfileUpdateForm />
              </div>
            </div>
          </div>
        </StyledCard>
      </ScrollBar>
    </StyledDiv>
  );
}

export default UserInfo;
const StyledDiv = styled.div`
  height: inherit;

  background-color: var(--midNight-blue);
  height: 100%;
  .ant-picker {
    width: 100%;
  }
  .ant-upload {
    float: center !important;
  }
  .ant-card {
    margin: auto;
  }
`;
