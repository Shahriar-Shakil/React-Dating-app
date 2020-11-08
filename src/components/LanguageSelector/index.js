import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckOutlined } from "@ant-design/icons";
import GenderChoise from "./genderChoise";
import { Input } from "antd";
import LanguageChangeOption from "../LanguageOpt";
import { List } from "antd";
import { StyledCard } from "../styledElement/index-v2";
import allLanguages from "../../assets/JSON/language_List_code.json";
import styled from "styled-components";
import { userLangSet } from "../../redux/user/user.actions.types";
import { userSuggestedLang } from "../../redux/appState/actions";

const LanguageSeletor = () => {
  const dispatch = useDispatch();

  let [languageList, setLanguageList] = useState(allLanguages);
  const userLanguage = useSelector((state) => state.userData.userLanguage);
  const userGender = useSelector((state) => state.userData.userGender);
  // default user language
  let geoLanguageCode = useSelector(
    (state) => state.appState.userGeoDetails.languages
  );
  let suggestedLanguageByLocation = useSelector(
    (state) => state.appState.userSuggestedLanguage
  );
  useEffect(() => {
    if (languageList.length > 0) {
      var suggestedLanguage = languageList.filter((item) => {
        if (item.code !== undefined && geoLanguageCode !== undefined) {
          return geoLanguageCode.indexOf(item.code) !== -1;
        }
      });
      if (suggestedLanguage.length > 0) {
        dispatch(userSuggestedLang(suggestedLanguage));
      }
    }
  }, [geoLanguageCode]);

  //choose language
  const handleSelectLanguage = (language) => {
    dispatch(userLangSet(language));
    // history.push(ROUTE.CHOISE);
  };

  return (
    <StyledCardLanguageSelector bordered={false} style={{ width: 380 }}>
      <List
        // size="large"
        header={
          <div className="w-100 p-2 d-flex justify-content-between align-items-center">
            <div>
              Language Selection <span className="pl-4"> </span>
            </div>
            <div>
              <LanguageChangeOption />
            </div>
          </div>
        }
        footer={<GenderChoise />}
        bordered
        dataSource={suggestedLanguageByLocation}
        loading={suggestedLanguageByLocation.length < 1}
        renderItem={(item, i) => (
          <List.Item
            className={`${userLanguage === item.name ? "selected" : ""}`}
            onClick={() => handleSelectLanguage(item.name)}
            key={i}
          >
            <div className="w-100 d-flex  justify-content-between">
              <span className="text-capitalize">{item.name}</span>
              {userLanguage === item.name && (
                <span className="">
                  <CheckOutlined />
                </span>
              )}
            </div>
          </List.Item>
        )}
      />
    </StyledCardLanguageSelector>
  );
};

export default LanguageSeletor;

const StyledCardLanguageSelector = styled(StyledCard)`
  .ant-input-search {
    width: 140px;
    background-color: #d8d8d873;
    border: 1px solid transparent;
  }
  /* input:: */
  .ant-input-affix-wrapper {
    padding: 0px 2px;
  }
  .ant-input-affix-wrapper:hover,
  .ant-input-affix-wrapper:focus {
    border-color: transparent !important;
  }
  .ant-input {
    background: #fff4f4e3;
    border-radius: 0px;
    ::placeholder {
      color: var(--main-color-ligh);
      opacity: 1;
      text-align: center;
    }
  }
  .ant-input-suffix {
    background-color: #e6d6d8;
    margin: 0px;
  }
  .ant-list-header {
    padding: 0px !important;
  }

  .ant-list-item {
    padding: 7px 0px;
    cursor: pointer;
  }
  .ant-list-footer {
    display: flex;
    padding: 0px;
    align-items: center;
    justify-content: space-around;
    padding-right: 0px !important; 
    padding-left: 0px !important;
    background-color: #e4e4e499 !important;
}
    
  }
  .selected {
    color: #000;
    font-weight: bold;
  }
`;
