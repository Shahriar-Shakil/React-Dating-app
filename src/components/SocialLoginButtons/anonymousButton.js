import React from "react";
import anonymous from "../../assets/svg/anonymous.svg";
import { createButton } from "react-social-login-buttons";
import { createSvgIcon } from "react-social-login-buttons";
const config = {
  text: "Login as Guest",
  icon: createSvgIcon(Icon),
  iconFormat: (name) => `fas fa-${name}`,
  style: {
    background: "#9b59b6",
  },
  activeStyle: { background: "#8e44ad" },
};
/** My Facebook login button. */
const GuestLoginButton = createButton(config);

export default GuestLoginButton;

function Icon({ width = 24, height = 24, color }) {
  return <img src={anonymous} width={width} height={height} alt="" />;
}
