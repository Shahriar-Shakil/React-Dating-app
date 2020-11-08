import React from "react";
import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";
import whatsApp from "../../assets/svg/whatsapp.svg";
const config = {
  text: "Login With whatsApp",
  icon: createSvgIcon(Icon),
  iconFormat: (name) => `fas fa-${name}`,
  style: {
    background:
      "linear-gradient(45deg, rgb(229, 255, 204), rgb(30, 190, 165), rgb(0, 230, 118), rgb(208, 233, 234), rgb(73 236 38), rgb(109 109 109))",
  },
  activeStyle: { background: "#28a745" },
};
/** My Facebook login button. */
const WhatsAppLoginButton = createButton(config);

export default WhatsAppLoginButton;

function Icon({ width = 24, height = 24, color }) {
  return <img src={whatsApp} width={width} height={height} alt="" />;
}
