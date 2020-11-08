import "react-perfect-scrollbar/dist/css/styles.css";

import { Button, Drawer, Typography } from "antd";
import { FileSearchOutlined, FilterOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import AgeBetween from "../FilterComponents/age";
import CharacterQualities from "../FilterComponents/character";
import { Checkbox } from "antd";
import Location from "../FilterComponents/location";
import PeopleType from "../FilterComponents/peopleType";
import ScrollBar from "react-perfect-scrollbar";
import { StyledCard } from "../styledElement/index-v2";
import { searchResultFound } from "../../redux/appState/actions";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const MeetPeople = () => {
  const [visible, setvisible] = useState(true);
  const [advanceSearch, setadvanceSearch] = useState(false);
  const dispatch = useDispatch();
  const handleVisible = () => {
    setvisible(false);
    dispatch(searchResultFound(true));
  };
  const handleChange = (e) => {
    setadvanceSearch(e.target.checked);
  };
  return (
    <StyledDrawer
      title={<Title />}
      placement={"right"}
      closable={false}
      // onClose={this.onClose}
      visible={visible}
      // key={placement}
      footer={<Footer onClick={handleVisible} />}
    >
      <ScrollBar>
        <PeopleType />
        <div className="col px-0  d-block text-center">
          <Checkbox onChange={handleChange}>Advance Search</Checkbox>
        </div>
        <div className="col-12 mt-2 ">
          <span className="d-block borderd"></span>
        </div>
        {advanceSearch && (
          <>
            <AgeBetween />
            <Location />
            <CharacterQualities />
          </>
        )}
      </ScrollBar>
    </StyledDrawer>
  );
};

export default MeetPeople;

const Title = () => {
  return (
    <div className="d-flex justify-content-between">
      <span>Filters</span>
      <span>
        <FilterOutlined />
      </span>
    </div>
  );
};
const Footer = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="btn rounded-0 ">
        Find <FileSearchOutlined />
      </button>
    </>
  );
};
const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background-color: var(--midNight-blue);
   
   
  }
  .ant-drawer-header{
      padding: 12px 8px;
      background-color: var(--midNight-blue);
      border-bottom:#000 !important;
  };
      .ant-drawer-title{
        color:#FFF
      }
    }
    .ant-drawer-body{
      padding: 0;
    }
  .ant-drawer-footer {
    padding: 0px;
    border-top: none;
    .btn{
      width:100%;
      height:45px;
      border:none;
      color:#fff;
      font-size: 1.3rem;
    }
  }
  .title {
    background: #34495e;
    padding: 8px 0px;
    border-radius: 0px;
    color:var(--main-orange) !important;
  }
  .borderd {
    border-top: 1px solid var(--orange-border) ;
  }
  .ant-checkbox-wrapper {
    color: #fff;
  }
  .btn{
    background:var(--main-orange) !important;
    :hover{
      background:#ff5200 !important;
    }
  }
  .ant-drawer-mask{
    background-color: rgba(17, 17, 17, 0.77);
  }
`;
