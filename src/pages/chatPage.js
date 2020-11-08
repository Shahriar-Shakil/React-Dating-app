import React from "react";
import ChatShell from "../components/chatsContainer/shell/ChatShell";
import styled from "styled-components";

const ChatPage = () => {
  return (
    <StyledDiv>
      <ChatShell />
    </StyledDiv>
  );
};

export default ChatPage;

const StyledDiv = styled.div`
  display: grid;
  place-items: center center;
  background: linear-gradient(to right, #57c1eb 0%, #246fa8 100%);
  height: 100%;
`;
