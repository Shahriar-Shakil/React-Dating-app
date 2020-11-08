import { Modal, Radio } from "antd";
import React, { useEffect } from "react";
import {
  faGraduationCap,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ROUTE from "./../RouteUrls/index";
import { Typography } from "antd";
import { setUserMood } from "../../redux/user/user.actions.types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AppMoodChoise = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChoise = (e) => {
    history.push(e.target.value);
    dispatch(setUserMood({ isSelect: true, mood_type: e.target.value }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <StyledModal visible={true} closable={false} footer={false}>
            <div className="col-md-12 text-center">
              <Typography
                className="badge badge-light text-capitalize font-16"
                level={4}
              >
                would you like to meet or learn ?
              </Typography>
              <div className="py-2">
                <Radio.Group
                  size={"small"}
                  buttonStyle={"solid"}
                  onChange={handleChoise}
                >
                  <Radio.Button value={ROUTE.MEET}>
                    Meet{" "}
                    <span className="pl-2">
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                  </Radio.Button>
                  <Radio.Button value={ROUTE.LEARN}>
                    Learn{" "}
                    <span className="pl-2">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                  </Radio.Button>
                </Radio.Group>
              </div>
            </div>
          </StyledModal>
        </div>
      </div>
    </div>
  );
};

export default AppMoodChoise;
const StyledModal = styled(Modal)`
  width: 350px !important;
  .ant-modal-content {
    background-color: var(--midNight-blue);
    box-shadow: 0 0 10px 2px var(--midNight-blue);
  }
  .ant-typography {
    color: var(--main-orange);

    background: var(--midNight-blue);
  }
  .ant-radio-button-wrapper {
  }
  .ant-modal-footer {
    text-align: center !important;
  }
  .ant-radio-button-wrapper {
    height: 32px !important;
    padding: 6px 16px !important;
    color: var(--main-orange);
  }
`;
