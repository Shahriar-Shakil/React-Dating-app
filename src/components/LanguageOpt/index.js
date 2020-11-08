import "react-perfect-scrollbar/dist/css/styles.css";

import { Dropdown, Input, List } from "antd";
import React, { useEffect, useState } from "react";
import { Sticky, StickyContainer } from "react-sticky";
import { useDispatch, useSelector } from "react-redux";

import { CheckOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollBar from "react-perfect-scrollbar";
import { StyledLanguageList } from "../LanguageSelector";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import languages from "../../assets/JSON/language_List_code.json";
import styled from "styled-components";
import useDebounce from "./../../customHook/use-debounce";
import { userLangSet } from "../../redux/user/user.actions.types";

const { Search } = Input;

const LanguageChangeOption = ({ color }) => {
  let dispatch = useDispatch();
  const [languageList, setlanguageList] = useState(languages);
  const userLanguage = useSelector((state) => state.userData.userLanguage);
  //filter lang list
  const [searchText, setsearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 700);
  useEffect(() => {
    if (debouncedSearchTerm) {
      let result = languages.filter((item) =>
        item.name.toLowerCase().includes(searchText)
      );
      if (result) {
        setlanguageList(result);
      }
    } else {
      setlanguageList(languages);
    }
  }, [debouncedSearchTerm]);
  const handleOtherLanguage = (language) => {
    dispatch(userLangSet(language));
  };

  useEffect(() => {
    setsearchText(userLanguage);
  }, [userLanguage]);
  return (
    <StyledDropdown
      className={`mt-5 ${color && `${color}`}`}
      trigger={["click"]}
      placement="bottomCenter"
      color={color}
      overlay={
        <ScrollbarParent className="pt-2">
          <ScrollBar>
            <List
              className="p-0"
              header={<div></div>}
              footer={<div></div>}
              grid={{ gutter: 16, column: 3 }}
              dataSource={languageList}
              renderItem={(item, i) => (
                <List.Item
                  key={i}
                  onClick={() => handleOtherLanguage(item.name)}
                >
                  <div
                    className={`w-100 list-item-wrapper px-3 ${
                      userLanguage === item.name && "selected"
                    }`}
                  >
                    <span
                      data-toggle="tooltip"
                      data-placement="top"
                      title={item.name}
                      className="text-capitalize"
                    >
                      {item.name}
                    </span>{" "}
                  </div>
                </List.Item>
              )}
            />
          </ScrollBar>
        </ScrollbarParent>
      }
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Search
          placeholder={userLanguage === "" ? "choose lang" : userLanguage}
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
          onMouseDown={() => setsearchText("")}
          enterButton=""
          // onChange={handleChange}
        />
      </a>
    </StyledDropdown>
  );
};

export default LanguageChangeOption;
const StyledDropdown = styled(Dropdown)`
  ${(props) => {
    if (props.color === "themeColor") {
      return `
      .ant-input-affix-wrapper {
    background-color: #CD5C5C !important;
    .ant-input {
      background-color: #CD5C5C !important;
    }
  }
  .anticon{
    color: rgb(255 255 255 / 75%);
  }
      `;
    }
  }}
`;
const ScrollbarParent = styled.div`
  width: 320px;
  height: 500px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 11px 0px black;
  .ant-list-header {
    display: none;
  }
  .selected {
    color: #f18b8b !important;
    font-weight: bold;
  }
  .list-item-wrapper {
    cursor: pointer;
    color: #000;
  }
  .ant-row {
    div {
      height: 24px;
      .ant-col {
        overflow: hidden;
      }
    }
  }
`;
