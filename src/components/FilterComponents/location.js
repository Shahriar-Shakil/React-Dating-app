import { InputNumber, Slider } from "antd";
import React, { useState } from "react";

import { Select } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";

const { Option } = Select;
export default function Location() {
  const userInfo = useSelector((state) => state.appState.userGeoDetails);
  const [country, setcountry] = useState(userInfo.country_name);
  const [distance, setdistance] = useState(0);
  function onChange(value) {}

  function onSearch(val) {}
  const onChangeSlide = (value) => {
    setdistance(value);
  };
  return (
    <StyledDiv className="row m-0">
      <div className="col p-0">
        <span className="title badge font-14 d-block text-center text-capitalize text-light">
          People from{" "}
        </span>
        <div className="col pt-3 ">
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
            <Option value="bangladesh">
              <div className="d-flex justify-content-around">
                <span>
                  <img
                    className="img-size"
                    src={userInfo.country_flag}
                    alt="flag"
                  />
                </span>{" "}
                <span>{userInfo.country_name}</span>
              </div>
            </Option>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <Select
            className="d-block mx-auto mt-2"
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            defaultValue={userInfo.city}
          >
            <Option value={userInfo.city}>
              <div className="d-flex justify-content-around">
                <span>{userInfo.city}</span>
              </div>
            </Option>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <div className="col pt-2 px-0">
          <span className="d-block text-center text-light py-2 mb-1">Or</span>
          <div className="d-flex bg-trans align-items-center">
            <div className="font-13 text-light pl-2">Distance Within</div>
            <div className="">
              <InputNumber
                min={0}
                max={110}
                style={{ margin: "0 16px" }}
                value={distance}
                onChange={onChangeSlide}
              />
            </div>
            <div>
              <Select defaultValue={"km"}>
                <Option value="km">km</Option>
                <Option value="mi">mi</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  .bg-trans {
    background: #2a2a2a;
  }
  .ant-select {
    color: rgb(255 255 255 / 79%);
  }
  .title {
    background: #ffffff4d;
    padding: 8px 0px;
  }
  .img-size,
  .ant-select-dropdown.img-size {
    height: 20px;
    width: 30px;
  }
  .ant-input-number {
    width: 65px;
  }
  .ant-select-selector {
    background-color: #32323299 !important;
    border: 1px solid var(--orange-border) !important;
  }
  .ant-input-number-input {
    background-color: #2a2a2a;
    color: #ffffff4d;
  }
  .ant-input-number {
    border: 1px solid var(--orange-border) !important;
    background-color: #2f2f2f !important;
  }
  .ant-input-number-input {
    color: #f5f5f5;
  }
`;
