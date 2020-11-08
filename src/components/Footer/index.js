import Col from "antd/es/col";
import Layout from "antd/es/layout";
import React from "react";
import Row from "antd/es/row";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  height: 33px !important;
  padding: 5px 0px !important;
  border-top: 1px solid var(--gray-red) !important;
  border-bottom: 3px solid var(--gray-red) !important;
  background: var(--color-asphalt) !important;
  z-index: 999 !important;
  p {
    margin: 0;
    color: #a7abc3;
    padding-left: 1.25rem;
  }
  .partner a {
    vertical-align: middle;
  }
  .partner a img {
    height: 18px;
  }
`;
const PageFooter = () => {
  const { t, i18n } = useTranslation();

  return (
    <StyledFooter>
      <Row type="flex" justify="space-between">
        <Col span={24} className="text-center">
          <p>copyright 2020, MiNigh </p>
        </Col>
        <Col span={4} className="partner text-right pr-3"></Col>
      </Row>
    </StyledFooter>
  );
};

export default PageFooter;
