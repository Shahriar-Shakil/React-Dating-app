import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip, Slider } from "antd";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const PeopleType = () => {
  const gender = ["Man", "Women", "Herma"];

  return (
    <StyledDiv className="row m-0 ">
      <div className="col-12 p-0 ">
        <span className="title badge font-14 d-block text-center text-capitalize text-light">
          Interested In{" "}
        </span>

        <div className="col px-0 py-3">
          <CheckboxGroup options={gender} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default PeopleType;

const StyledDiv = styled.div`
  .checked {
    border: 3px solid #5b00afb0;
    background: #fff;
  }

  .ant-checkbox-group {
    padding: 10px;
    width: 100%;
    .ant-checkbox-wrapper {
      color: rgb(255 255 255);
    }
  }
`;
