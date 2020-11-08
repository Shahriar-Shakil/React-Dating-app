import React from "react";
import {StyledCard} from "../styledElement/index-v2";
import styled from "styled-components";
import {Typography} from "antd";
import "./index.css";
import AdvancedSearchForm from "./advanceSearch";
const FindPeople = () => {
  return (
    <StyledCardFindPeople className="my-3">
      <div className="row">
        {" "}
        <div className="col-12 ">
          <Typography.Title level={3}>Search</Typography.Title>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <AdvancedSearchForm />
        </div>
      </div>
    </StyledCardFindPeople>
  );
};

export default FindPeople;

const StyledCardFindPeople = styled(StyledCard)`
  width: 100%;
  .ant-card-body {
    background: #fff;
  }
`;
