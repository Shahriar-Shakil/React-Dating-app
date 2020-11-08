import React from "react";
import {Row, Typography} from "antd";
import FindPeople from "./../components/FindPeople/index";
import SearchResult from "./../components/FindPeople/searchResult";

const SearchPage = () => {
  return (
    <Row className="overflow-hidden h-100">
      <div className="container">
        <div className="row m-0">
          <FindPeople />
        </div>
        <div className="row m-0">
          <SearchResult />
        </div>
      </div>
    </Row>
  );
};

export default SearchPage;
