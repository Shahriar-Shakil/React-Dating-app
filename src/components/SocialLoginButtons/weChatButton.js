import React from "react";
import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";
import weChat from "../../assets/svg/wechat.svg";
const config = {
  text: "Login With WeChat",
  icon: createSvgIcon(Icon),
  iconFormat: (name) => `fas fa-${name}`,
  style: { background: "linear-gradient(120deg, #7bb32e, rgb(98 98 98))" },
  activeStyle: { background: "#28a745" },
};
/** My Facebook login button. */
const WeChatLoginButton = createButton(config);

export default WeChatLoginButton;

function Icon({ width = 24, height = 24, color }) {
  return <img src={weChat} width={width} height={height} alt="" />;
}
