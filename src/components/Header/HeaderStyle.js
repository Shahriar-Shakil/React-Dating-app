import styled from "styled-components";
import {Badge} from "antd";

const UserPanelHeader = styled.div`
a{line-height:1.2;}
`;
const StyledBadge = styled(Badge)`
  margin-right: 1.3rem;
  .ant-badge-count {
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    font-weight: normal;
    font-size: 10px;
    right: 0;
    top:1px;
    line-height: 11px;
  }
`;
export {StyledBadge, UserPanelHeader};