import "react-perfect-scrollbar/dist/css/styles.css";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import {
  anonymousAccount,
  loginWithGoogle,
} from "../../redux/user/user.actions.types";

import GuestLoginButton from "./anonymousButton";
import React from "react";
import ScrollBar from "react-perfect-scrollbar";
import SnapChatLoginButton from "./snapChatButton";
import TiktokLoginButton from "./tiktokButton";
import WeChatLoginButton from "./weChatButton";
import WhatsAppLoginButton from "./whatsAppButton";
import { loginWithFacebook } from "./../../redux/user/user.actions.types";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const SocialLoginButons = () => {
  const dispatch = useDispatch();

  function signinWithGoogle() {
    dispatch(loginWithGoogle());
  }
  const handleClick = () => {};
  const handleFacebook = () => {
    dispatch(loginWithFacebook());
  };
  const handleAnonymous = () => {
    dispatch(anonymousAccount());
  };
  return (
    <StyledDiv className="container">
      <div className="row scrollParent">
        <ScrollBar>
          <div className="col">
            <FacebookLoginButton onClick={handleFacebook} />
            <GoogleLoginButton onClick={signinWithGoogle} />
            <WhatsAppLoginButton style={{ color: "#2e4052" }} />
            <WeChatLoginButton />
            <InstagramLoginButton onClick={handleClick} />
            <TiktokLoginButton />
            <LinkedInLoginButton onClick={handleClick} />
            <TwitterLoginButton onClick={handleClick} />
            <SnapChatLoginButton style={{ color: "#2e4052" }} />
          </div>
        </ScrollBar>
      </div>
      <div className="row mt-3">
        <div className="col ">
          <span className="d-block text-center text-light">OR</span>
          <GuestLoginButton onClick={handleAnonymous} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default SocialLoginButons;

const StyledDiv = styled.div`
  .scrollParent {
    height: 278px !important;
  }

  .scrollbar-container {
    width: 100%;
    margin: auto;
  }
`;
