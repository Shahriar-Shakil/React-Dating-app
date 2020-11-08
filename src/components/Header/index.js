import "antd/lib/menu/style/index.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@ant-design/compatible";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import { NavLink } from "react-router-dom";
import ROUTE from "../RouteUrls";
import { StyledMenu } from "../styledElement/index-v2";
import UserPanel from "./userPanel";
import styled from "styled-components";

const { Header } = Layout;
const PageHeader = () => {
  return (
    <StyledHeader className="row py-1">
      <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12  d-flex align-items-center ">
        <StyleLogoArea className="logoArea">
          <NavLink to={ROUTE.SEARCH}>
            <img
              className="logo-img"
              src={require("../../assets/Nighlogo.png")}
              alt="logo-img"
            />
          </NavLink>
        </StyleLogoArea>
        <StyledMenu mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <NavLink to={ROUTE.SEARCH}>search</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={ROUTE.PAYMENT}>payment</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to={ROUTE.CHAT}>chat</NavLink>
          </Menu.Item>
        </StyledMenu>
      </div>
      <div className="col-md-5 my-auto">
        <UserPanel />
      </div>
    </StyledHeader>
  );
};

export default PageHeader;

const StyleLogoArea = styled.div`
  width: 120px;
  img {
    max-width: 100%;
    height: 60px;
  }
`;
const StyledHeader = styled(Header)`
  &&&.ant-menu-overflowed-submenu {
    display: none;
  }

  &.ant-layout-header {
    background: var(--color-asphalt);
    height: auto;
    padding: 0 15px;
    line-height: inherit;
    border-bottom: 1px solid var(--gray-red) !important;
  }

  @media screen and (max-width: 720px) {
    .logoArea {
      display: none !important;
    }
    userpanel {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  @media screen and (max-width: 640px) {
    .col-sm-7 {
      padding-left: 0px;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 380px) {
    .anticon {
      font-size: 16px !important;
    }
    .col-sm-7 {
      padding-right: 0px;
    }
  }

  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    border: 0 !important;
    top: 0;
    margin-top: 0;
  }
  .ant-menu-horizontal > .ant-menu-overflowed-submenu {
    display: none;
  }
  .ant-menu-horizontal > .ant-menu-item > a::before {
    bottom: 0;
  }
`;
