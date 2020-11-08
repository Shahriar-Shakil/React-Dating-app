import "antd/lib/button/style/index.css";
import "antd/lib/badge/style/index.css";

import styled, { css } from "styled-components";

import Badge from "antd/es/badge";
import Button from "antd/es/button";
import { Card } from "antd";
import Menu from "antd/es/menu";
import Sider from "antd/es/layout/Sider";

const StyledMenu = styled(Menu)`
  background-color: #34495e !important;
  font-size: 14px !important;
  margin: 0 15px 0 25px;
  border-bottom: none !important;
  line-height: 32px !important;
  .ant-menu-item {
    padding: 0 1rem;
    border-bottom: 0;
    top: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.7);
    max-height: 32px;
    overflow: hidden;
  }
  .ant-menu-item > a {
    color: #fff !important;
    text-transform: uppercase;
  }
  .ant-menu-item-selected a {
    color: #1890ff !important;
  }
  .ant-menu-item > a.active {
    font-weight: bold;
  }
  .ant-menu-item > a.active,
  .ant-menu-item:hover,
  .ant-menu-item:hover > a {
    border-bottom: 0;
    background-color: #c63927;
    color: #fff !important;
  }

  @media only screen and (max-width: 760px) {
    .ant-menu-item:nth-child(10) {
      float: none;
    }
    &&&li.ant-menu-item.menuitem-overflowed {
      display: inline-block;
    }
  }

  @media screen and (max-width: 640px) {
    margin: 0 !important;
  }
  @media screen and (max-width: 380px) {
    .ant-menu-item > a {
      padding: 0px 8px;
      font-size: 14px;
    }
  }
`;
const StyledCard = styled(Card)`
  background: transparent !important;
  .ant-card-body {
    background-color: #ffffff45;
    padding: 9px;
    /* box-shadow: 0px 0px 11px 10px #443f57; */
    border-radius: 2px;
    .ant-list {
      background: var(--main-light-gray);
      .ant-list-header {
        background: var(--main-red);
        color: #fff;
      }
      .ant-list-footer {
        padding-bottom: 0px;
      }
    }
  }
`;

export { StyledMenu, StyledCard };
