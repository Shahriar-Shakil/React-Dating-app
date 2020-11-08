import React, { Suspense, useState, useEffect, lazy } from "react";
import Layout from "antd/es/layout";
import { useDispatch, useSelector } from "react-redux";
import "antd/lib/layout/style/index.css";
import Spin from "antd/es/spin";
import { Tabs } from "antd";
// import PageHeader from "./../components/Header/index";
import PageFooter from "./../components/Footer/index";
import styled from "styled-components";
const PageHeader = lazy(() => import("./../components/Header/index"));

const { Content, Sider } = Layout;
const { TabPane } = Tabs;

const PageLayout = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="spinner-container">
          <Spin size="large" />
        </div>
      }
    >
      <StyledLayout className="content h-100">
        <PageHeader />
        <Layout>
          <Content className=" overflow-hidden h-100 position-relative bg-light">
            {children}
          </Content>
        </Layout>
        <PageFooter />
      </StyledLayout>
    </Suspense>
  );
};

export default PageLayout;

const StyledLayout = styled(Layout)`
  .ant-layout-content {
    background: var(--main-light-gray);
  }
`;
