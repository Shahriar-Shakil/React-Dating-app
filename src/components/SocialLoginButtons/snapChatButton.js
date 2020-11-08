import React from "react";
import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";
import snapChat from "../../assets/svg/snapchat.svg";
const config = {
  text: "Login With snapChat",
  icon: createSvgIcon(Icon),
  iconFormat: (name) => `fas fa-${name}`,
  style: { background: "linear-gradient(120deg, #fff,#fffc00)" },
  activeStyle: { background: "#fffd50" },
};
/** My Facebook login button. */
const SnapChatLoginButton = createButton(config);

export default SnapChatLoginButton;

function Icon({ width = 24, height = 24, color }) {
  return <img src={snapChat} width={width} height={height} alt="" />;
}
