import React from "react";
import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";
import tiktok from "../../assets/svg/tiktok.svg";
const config = {
  text: "Login With Tiktok",
  icon: createSvgIcon(Icon),
  iconFormat: (name) => `fas fa-${name}`,
  style:{ background: "#ff0053" },
  activeStyle:{ background: "#ff5270" }
};
/** My Facebook login button. */
const TiktokLoginButton = createButton(config);

export default TiktokLoginButton;

function Icon({ width = 24, height = 24, color }) {
  return <img src={tiktok} width={width} height={height} alt="" />;
}
