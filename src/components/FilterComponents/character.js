import React from "react";
import { Select } from "antd";
import styled from "styled-components";
const { Option } = Select;

const CharacterQualities = () => {
  const children = [];
  const character = [
    "Generosity",
    "Integrity",
    "Loyalty",
    "Devotion",
    "Loving",
    "Kindness",
    "Sincerity",
    "Self-control",
    "Peacefulness",
    "Faithfulness",
    "Patience",
    "Determination",
    "Persistence",
    "Adventurous",
    "Fairness",
    "Cooperation",
    "Tolerance",
    "Optimism",
    "Spirituality",
  ];
  for (let i = 0; i < character.length; i++) {
    children.push(<Option key={i}>{character[i]}</Option>);
  }
  function handleChange(value) {}
  return (
    <StyledDiv className="row m-0 my-4">
      <div className="col-12  p-0">
        <span className="title badge font-14 d-block text-center text-capitalize text-light">
          Desired Character Qualities{" "}
        </span>
        <div className="col py-3">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            //   defaultValue={['a10', 'c12']}
            onChange={handleChange}
          >
            {children}
          </Select>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CharacterQualities;

const StyledDiv = styled.div`
  .ant-select-selection-placeholder {
    color: #fff;
  }
  .ant-select-multiple .ant-select-selector {
    background-color: #32323299;
    border: 1px solid var(--orange-border) !important;
  }
`;
