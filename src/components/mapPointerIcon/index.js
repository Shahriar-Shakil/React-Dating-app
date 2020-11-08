import {Icon} from "leaflet";

export const maleIcon = new Icon({
  iconUrl: require("../../assets/male.png"),
  iconSize: [35, 35]
});
export const femaleIcon = new Icon({
  iconUrl: require("../../assets/female.png"),
  iconSize: [35, 35]
});
export const hermaIcon = new Icon({
  iconUrl: require("../../assets/herma.png"),
  iconSize: [35, 35]
});

const renderIcon = (type) => {
  if (type === "male") {
    return maleIcon;
  } else if (type === "female") {
    return femaleIcon;
  } else {
    return hermaIcon;
  }
};
export default renderIcon;
