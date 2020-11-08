import React, { useState } from "react";
import { Tooltip, Slider } from "antd";
import styled from "styled-components";
const AgeBetween = () => {
  const [age, setage] = useState([13, 60]);
  const handleChange = (value) => {
    setage(value);
  };
  return (
    <>
      <StyledDiv className="col-12 mt-3 ">
        <span className="badge font-14 d-block text-center text-uppercase text-light pt-3">
          Age between
        </span>
        <div>
          <span className="badge d-block text-center  text-light ">{`${age[0]} And ${age[1]}`}</span>
          <Slider
            range
            defaultValue={age}
            min={13}
            max={60}
            onChange={handleChange}
          />
        </div>
      </StyledDiv>
    </>
  );
};

export default AgeBetween;

const StyledDiv = styled.div`
  .ant-slider-track {
    background-color: var(--orange-border) !important;
  }
`;
