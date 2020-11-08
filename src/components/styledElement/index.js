import styled, {css} from "styled-components";
import Badge from "antd/es/badge";
import "antd/lib/badge/style/index.css";
import Row from "antd/es/row";
import "antd/lib/grid/style/index.css";
import Table from "antd/es/table";
import "antd/lib/table/style/index.css";
import Button from "antd/es/button";
import "antd/lib/button/style/index.css";
import Upload from "antd/es/upload";
import "antd/lib/upload/style/index.css";
import "antd/lib/pagination/style/index.css";

const StyledButton = styled(Button)`

border:${(props) => (props.bordered ? "1px solid #DEE2E6" : "none")};
border-radius:0px;
background-color:transparent;
color:${(props) => props.color || "#fff"};

&:hover{
background-color:transparent;
border:${(props) => (props.bordered ? `1px solid ${props.color}` : "none")};
color:${(props) => props.color || "#fff"};
}
span{
  padding:0 4px;
}

${(props) =>
  props.primary &&
  css`
    background-color: #5578eb;
    :hover,
    :focus {
      background-color: #335de7;
      color: ${(props) => props.color || "#fff"};
    }
  `}
${(props) =>
  props.success &&
  css`
    background-color: #0abb87;
    :hover,
    :focus {
      background-color: #08976d;
      color: ${(props) => props.color || "#fff"};
    }
  `}
${(props) =>
  props.danger &&
  css`
    background-color: #fd397a;
    :hover,
    :focus {
      background-color: #fd1361;
      color: ${(props) => props.color || "#fff"};
    }
  `}
${(props) =>
  props.secondary &&
  css`
    color: #6c7293;
    :hover,
    :focus {
      color: #6c7293;
      border-color: #e2e5ec;
      background-color: #f4f5f8;
    }
  `}
${(props) =>
  props.violet &&
  css`
    background-color: #683392;
    :hover,
    :focus {
      color: #fff;
      border-color: #8c47c3;
      background-color: #8c47c3;
    }
  `}
`;


const StyledBadge = styled(Badge)`
padding-left:${(props) => props.padding};
.ant-badge-count{
    color:#000;
    border-radius: 3px ;
    box-shadow: 0 0 0 0px ;
    background:${(props) => (props.background ? props.background : "#E1E1EF")};
    border:1px solid ${(props) =>
      props.background ? props.background : "#E1E1EF"}
}
${(props) =>
  props.warning &&
  css`
    .ant-badge-count {
      background-color: #fff1d3;
      border: 1px solid #fff1d3;
    }
  `}
${(props) =>
  props.danger &&
  css`
    .ant-badge-count {
      background-color: #ffd7e4;
      border: 1px solid#FFD7E4;
    }
  `}
${(props) =>
  props.success &&
  css`
    .ant-badge-count {
      background-color: #cef1e7;
      border: 1px solid #cef1e7;
    }
  `}
${(props) =>
  props.primary &&
  css`
    .ant-badge-count {
      background-color: #dde4fb;
      border: 1px solid #dde4fb;
    }
  `}
`;
const StyledHeader = styled(Row)`
  background-color: #683392;
  border-bottom-color: #683392;
  line-height: inherit;

  img {
    border-style: none;
    max-width: 100%;
    height: 32px;
    padding-left: 6%;
  }
  .ant-col {
    display: flex;
    justify-content: end;
    height: inherit;
  }
`;
const StyledFooter = styled(Row)`
  padding: 0px 20px;
  border-top: 2px solid #8dc641;
  border-bottom: 2px solid #8dc641;
  display: flex;
  width: 100%;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  p {
    margin: 0;
    color: #a7abc3;
  }

  .partner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledTabsContainer = styled.div`
  margin-top: 10px !important;
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: #683392;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    background: #fff !important;
    border-radius: 0;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container {
    height: 40px;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    height: 40px;
    border-top: 1px solid #683392;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    line-height: 18px;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    height: 40px;
  }

  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    padding: 0px 0px;
  }
  .ant-tabs-tab-active svg {
    color: #683392;
  }
  */
    /* hide tab scroll */
    .ant-tabs-nav-container-scrolling {
    padding: 0px !important;
  }
  .ant-tabs-tab-arrow-show {
    /* display: none */
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    color: #683392;
  }
`;
const StyledTabHeader = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  svg {
    font-size: 24px;
  }
  .title {
    display: block;
    font-size: 12px;
  }
  div {
    padding: 0 5px;
  }
`;

const FixedHeightForTable = styled.div`
  overflow: hidden;
  height: 100%;
  .noSplitToggler > div:first-child {
    height: 100% !important;
  }
  .SplitToggler .agoto_daak .ant-table-body {
    max-height: ${(props) =>
      `calc(100vh - ${400 + props.changedHeight}px) !important`};
  }
  .ant-table-wrapper {
    overflow: hidden;
    height: 100%;
  }
  .ant-spin-container {
    position: relative;
  }
  .agotoDaak .ant-table-pagination.ant-pagination {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
  }
  .ant-table-pagination.ant-pagination {
    margin: 5px 0 0;
  }
  .ant-pagination.mini .ant-pagination-item {
    display: none;
  }
  .ant-pagination-item-active {
    display: inline-block !important;
  }
`;

const StyledTable = styled(Table)`
  height: 100%;
  overflow: hidden;
  button:hover {
    box-shadow: 0 0 10px -5px #000;
  }
  .ant-table-selection-down {
    vertical-align: top;
  }
  .ant-table-selection-select-all-custom {
    margin-bottom: 0;
  }
  .ant-table-small,
  .ant-table-small > .ant-table-content .ant-table-header,
  .ant-table-header table {
    border-radius: 0;
    border-top: none !important;
    min-height: 55px;
  }
  .ant-table-scroll {
    display: flex;
    flex-direction: column;
  }
  .ant-table-scroll,
  .ant-table-body,
  .ant-table,
  .ant-spin-container,
  .ant-table-content,
  .ant-spin-nested-loading {
    height: 100%;
  }
  .ant-table-small > .ant-table-content > .ant-table-body {
    margin: 0;
  }
  .ant-pagination.mini .ant-pagination-item {
    display: none;
  }
  h5 {
    font-size: 16px;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    right: 10px;
    z-index: 9;
    margin: 5px;
  }

  .New {
    h5,
    h6 {
      color: #000;
      text-shadow: 0 0 0.5px #000;
      font-weight: 100 !important;
    }
  }
  .ant-table-tbody > tr:hover {
    box-shadow: 0 0 10px -5px rgba(0, 0, 0, 1);
  }
  .ant-table-tbody > tr:hover td {
    background: none !important;
  }
  .ant-table-tbody > tr .actionButtons button {
    background: rgba(0, 0, 0, 0.03);
  }
  .ant-table-tbody > tr .actionButtons img {
    width: 18px;
    height: 18px;
  }
  .ant-table-tbody > tr .actionButtons {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
  .ant-table-tbody > tr:hover .actionButtons {
    visibility: visible;
    opacity: 1;
  }
  .ant-table-tbody > tr {
    cursor: pointer;
  }
  .ant-table-thead > tr > th {
    background-color: #fff;
    color: #6c7293;
  }
  .ant-table-tbody td {
    padding: 5px 8px 2px 2px !important;
    vertical-align: top;
  }

  td {
    // color: #6c7293;
    padding: 15px 0px;
  }
  .link a {
    color: #fff;
    background: #0abb87;
    padding: 8px 10px;
    &:hover {
      background-color: #08976d;
    }
  }
`;
const DaakUploadStyledRow = styled(Row)`
  margin: 10px 20px;
  border: 1px solid #f7f8fa;
  .label {
    padding: 8px 0;
  }
  .ant-row {
    padding: 10px 20px;
  }
`;
const StyledAttachmentUpload = styled(Upload)`
  .ant-upload {
    width: 100%;
  }

  .browse-button {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dee2e6;
    padding: 0;
  }
  .browse-button:after {
    content: "ব্রাউজ";
    float: right;
    background: #f7f8fa;
    height: 100%;
    padding: 4px 20px;
    border-left: 1px solid#DEE2E6;
  }
`;
const NothiButtonGroup = styled.span`
  display: flex;
  button {
    display: flex;
    margin: 0 1px;
    padding: 7px;
    background: #fff;
    color: #6c7293;
    border: 1px solid #e2e5ec;
    border-radius: 0px;
    &:hover {
      color: #6c7293;
      border-color: #e2e5ec;
      background-color: #f4f5f8;
    }
    &:focus {
      outline: none;
    }
  }
`;
const StyledBumagaTabs = styled.div`
  border-bottom: 2px solid rgba(10, 187, 135, 0.1);
  .tab-item {
    background: #fff;
    padding: 10px 3px;
    font-size: 13px;
    border: 2px solid #fff;
    &:hover {
      border-bottom: 2px solid #0bd398;
    }
    .btn-title {
      padding: 0 3px 0 8px;
    }
    svg {
      color: #adb1c7;
    }
  }
  .tab-item.active {
    border-bottom: 2px solid #0bd398;
    svg {
      color: #0bd398;
    }
  }
`;
const StyledBumagaTabsContainer = styled.div`
  border-bottom: 1px solid #dee2e6;
  .tab-item {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 7px 5px;
    transition: all 0.2s ease-out;
    position: relative;
    top: 1px;
    svg {
      color: #555;
    }
    &:hover {
      border-top: 2px solid #683392;
      svg {
        color: #683392;
      }
    }
    &:focus {
      outline: none;
    }
  }
  .tab-item.active {
    border-top: 2px solid #683392;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    border-bottom: 1px solid #fff;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;

    svg {
      color: #683392;
    }
  }
`;
const StyledAttachmentBadge = styled(Badge)`
  sup {
    background-color: #52c41a;
    transform: scale(0.7) !important;
    transform-origin: 0 -10px;
    color: black;
  }
`;

const StyledKhoshoraHeader=styled.div`
  min-height: 36px;
  padding: 12px 12px 0 12px;
  background: #fafafa;
  .ant-typography{
    font-size: 13px !important;
  }
`;



export {
  StyledKhoshoraHeader,
  StyledAttachmentBadge,
  StyledBadge,
  StyledHeader,
  StyledFooter,
  StyledTabsContainer,
  StyledTabHeader,
  FixedHeightForTable,
  StyledTable,
  StyledButton,
  DaakUploadStyledRow,
  StyledAttachmentUpload,
  NothiButtonGroup,
  StyledBumagaTabs,
  StyledBumagaTabsContainer
};
