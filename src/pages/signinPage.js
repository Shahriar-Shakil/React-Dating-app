import { Modal, Spin, Tabs } from "antd";

import LoginWithEmail from "../components/loginWithEmail";
import LoginWithPhone from "../components/loginWithPhonePanel";
import React from "react";
import SocialLoginButons from "../components/SocialLoginButtons/index";
import styled from "styled-components";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;
const SignInPage = () => {
  let loading = useSelector((state) => state.userData.loading);

  function callback(key) {
    console.log(key);
  }
  return (
    <React.Fragment>
      <StyledModal visible={true} closable={false} footer={false}>
        <div className="container ">
          <div className="row p-2">
            <div className="col-12 ">
              <Spin spinning={loading}>
                {" "}
                <SocialLoginButons />
              </Spin>
            </div>
          </div>
          <div className="row ">
            <span className="d-block text-center  text-capitalize w-100 pb-2 text-orange">
              You can Also Login with
            </span>
            <StyledTabs onChange={callback} type="card">
              <TabPane tab="Phone" key="1">
                <LoginWithPhone />
              </TabPane>
              <TabPane tab="Email" key="2">
                <LoginWithEmail />
              </TabPane>
            </StyledTabs>
          </div>
        </div>
      </StyledModal>
    </React.Fragment>
  );
};

export default SignInPage;

const StyledModal = styled(Modal)`
  width: 320px !important;
  .ant-modal-content {
    box-shadow: 0 0 10px 2px var(--midNight-blue);
  }
  .ant-modal-body {
    padding: 0px;
  }
  .container {
    background: var(--midNight-blue);
  }
  .title {
    font-size: 1.3rem;
    text-transform: capitalize;
    text-align: center;
  }
  .footer {
    background: #777;
    text-align: center;
    padding: 1%;
    .cp-text {
      color: rgba(0, 0, 0, 0.7);
      text-shadow: 0 1px rgba(255, 255, 255, 0.1);
    }
  }
`;
const StyledTabs = styled(Tabs)`
  width: 100%;
  text-align: center;
  .ant-tabs-nav-wrap {
    justify-content: center;
  }
  .ant-tabs-nav::before {
    border-bottom: none !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background: var(--main-orange) !important;
    border: none !important;
  }
`;
