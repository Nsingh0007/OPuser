import { createContext } from "react";

export const ThemeColors = {
  primary: "#0B1C30",
  secondary: "#F5F5F5",
  third: "#CAAED6",
  light: "#E7E7E7",
  other: "#7E7383",
  deactive: "#B3A7B7",
  black: "#000000",
  white: "#FFFFFF",
  icon: "#BA8ACE",
  disable:"#8A9CB0",
  buttonbg:"#E5ECF0",
  inputbg:"#FAFAFA",
  selectedInput:"#F0F5FB"

};
export const ThemeColorContext = createContext({
    color: ThemeColors.primary,
  });
  
export default function ThemeColorWrapper(){}