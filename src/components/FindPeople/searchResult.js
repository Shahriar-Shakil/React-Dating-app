import { Card } from "antd";
import React from "react";
import { StyledCard } from "../styledElement/index-v2";
import styled from "styled-components";
const { Meta } = Card;
const SearchResult = () => {
  const getSearchItem = () => {
    let searchItem = [];
    for (let i = 0; i <= 15; i++) {
      searchItem.push(
        <div key={i} className="col-md-4 my-3">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title={
                <div className="row">
                  <div className="col-12 d-flex align-items-center">
                    <h4 className="card-title pr-2">Jean</h4>
                    <span className="font-12">female 19</span>
                  </div>
                </div>
              }
              description="www.instagram.com"
            />
          </Card>
        </div>
      );
    }
    return searchItem;
  };
  return (
    <div className="col-12 p-0">
      <SearchResultStyledCard>
        <div className="row">{getSearchItem()}</div>
      </SearchResultStyledCard>
    </div>
  );
};

export default SearchResult;

const SearchResultStyledCard = styled(StyledCard)`
  .ant-card-body {
    background: #fff;
  }
`;
