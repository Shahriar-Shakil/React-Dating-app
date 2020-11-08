import { Avatar, Button, Dropdown, Icon, Menu, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import ROUTE from "../RouteUrls";
import React from "react";
import { Route } from "react-router-dom";
import { logout } from "../../redux/user/user.actions.types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledMenu = styled(Menu)`
  background: #f8f9fa;
  width: 240px;
  &.ant-menu-inline .ant-menu-item {
    height: auto;
    line-height: 20px;
    width: auto;
    padding: 5px;
    border-bottom: 1px solid #e8e8e8;
    white-space: pre-wrap;
  }
  &.ant-menu-inline .ant-menu-item:hover,
  .ant-menu-item-selected {
    color: #8642bb;
  }
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
  .ant-menu-item::after {
    border-right-color: transparent;
  }
  .ant-menu-item span {
    display: block;
  }
`;

const UserPanel = () => {
  const history = useHistory();
  const userInfo = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    history.push(ROUTE.LOGIN);
  };
  const menu = (
    <StyledMenu className="shadow">
      <Menu.Item key="0">
        <a href="javascript:;">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="javascript:;">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Row type="flex" justify="space-around">
        <Button>Settings</Button>
        <Button type="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Row>
    </StyledMenu>
  );
  return (
    <Row type="flex" align="middle" justify="end">
      <Dropdown placement="bottomCenter" overlay={menu} trigger={["click"]}>
        <a
          style={{ color: "#2c3e50", fontWeight: "bold" }}
          className="ant-dropdown-link pl-1 text-decoration-none text-light"
          href="#"
        >
          <Avatar
            size="large"
            src={
              userInfo.photoURL === null
                ? `${require("../../assets/anonymous.jpg")}`
                : userInfo.photoURL
            }
          />

          <span className="px-2">
            {userInfo.displayName === null ? "Guest" : userInfo.displayName}
          </span>
        </a>
      </Dropdown>
      {/* <LanguageSelector /> */}
    </Row>
  );
};

export default UserPanel;
