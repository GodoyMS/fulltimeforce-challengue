import { Dimensions } from "react-native";
const { height, width, fontScale, scale } = Dimensions.get("window");
const COLORS = {

  primary:{
    low:"#FFB1C7",
    medium:"#FEB5DB",
    high:"#FF58A4"
  },
  friendShip: {
    from: "#9072E5",
    to: "#7086E3"
  },
  dates: {
    from: "#FFB03A",
    to: "#FF6B86",
  },
  relationShip: {
    from: "#FF6B86",
    to: "#FF58A4",
  },

  gray:{
    low:"#D0BFBF",
    high:"#333333"
  },
  black: "#000000",
  white: "#ffffff",

};
const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};
const SIZES = {
  //global size
  vertical: 10,
  horizontal: 30,
  padding: 9,
  radius: 5,
  base: 8,
  xxSmall: 10,
  xSmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xLarge: 20,
  xxLarge: 24,
  //dimensions
  width,
  height,
  fontScale,
  scale,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const BORDERSRADIUS = {
  small: 15,
  medium: 20,
};
const ICONSIZES = {
  medium: 24,
};

const BORDERSWIDTH = {
  medium: "2px",
};

const PADDING = 5;

export {
  COLORS,
  SIZES,
  SHADOWS,
  BORDERSRADIUS,
  BORDERSWIDTH,
  ICONSIZES,
  PADDING,
  FONT,
};
