import React, { useState } from "react";
import { Slider, Tooltip } from "antd";

import { Checkbox } from "antd";
import LanguageChangeOption from "../LanguageOpt";
import { Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

const LearnLanguage = () => {
  function onChange(value) {}

  function onSearch(val) {}
  return (
    <StyledDiv className="row m-0 ">
      <div className="col-12 p-0 ">
        <span className="title badge font-14 d-block text-center text-capitalize text-light">
          I want to Learn{" "}
        </span>

        <div className="col px-0 py-3">
          <Select
            className="d-block mx-auto"
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={"bangladesh"}
          >
            <Option value="bangladesh">Bangla</Option>
            <Option value="jack">English</Option>
            <Option value="lucy">Spanish</Option>
            <Option value="tom">Urdu</Option>
          </Select>
          <span className="separetor d-block text-center">From</span>
          <Select
            className="d-block mx-auto"
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={"bangladesh"}
          >
            <Option value="bangladesh">Native</Option>
            <Option value="jack">Proficiency</Option>
            <Option value="lucy">Elementary Proficiency</Option>
          </Select>
        </div>
      </div>
    </StyledDiv>
  );
};

export default LearnLanguage;

const StyledDiv = styled.div`
  .separetor {
    color: var(--main-orange);
  }
  .ant-select-selector {
    background-color: #32323299 !important;
    border: 1px solid var(--orange-border) !important;
  }
  .ant-select {
    color: rgb(255 255 255);
    text-align: center;
  }
`;
