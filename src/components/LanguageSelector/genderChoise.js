import { Button, Radio, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { ArrowRightOutlined } from "@ant-design/icons";
import ROUTE from "../RouteUrls";
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { userGenderSet } from "../../redux/user/user.actions.types";

const GenderChoise = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const userLanguage = useSelector((state) => state.userData.userLanguage);
  const userGender = useSelector((state) => state.userData.userGender);
  const handleGenderChange = (e) => {
    dispatch(userGenderSet(e.target.value));
  };
  const handleNextClick = () => {
    history.push(ROUTE.USERCHOISE);
  };
  return (
    <StyledDiv className="d-flex align-items-start flex-column w-100 ">
      <span className="badge">Select Your Gender</span>
      <div className="px-2">
        <Radio.Group value={userGender} onChange={handleGenderChange}>
          <Radio value={"male"}>Male</Radio>
          <Radio value={"female"}>Female</Radio>
          <Radio value={"herma"}>Herma</Radio>
        </Radio.Group>
        {userGender !== "" && userLanguage !== "" && (
          <Tooltip title="Next">
            <Button
              onClick={() => handleNextClick()}
              size="small"
              icon={<ArrowRightOutlined />}
            ></Button>
          </Tooltip>
        )}
      </div>
    </StyledDiv>
  );
};

export default GenderChoise;

const StyledDiv = styled.div`
  .ant-radio-group {
    padding: 8x 0px !important;
  }
  .badge {
    font-size: 14px;
    width: 100%;
    border-bottom: 1px solid #f3d4d4;
    border-radius: 0px;
    background-color: #f3d4d4;
    color: #585858;
    font-weight: bold;
  }
  .ant-radio-group.ant-radio-group-outline {
    padding: 5px 10px;
  }
`;
