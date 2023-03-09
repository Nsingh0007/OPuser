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
  selectedInput:"#F0F5FB" ,

  cardcenter:{
      border: "1px solid #D9E3EE ",
      padding: "50px 25px",
      borderRadius: "10px",
      // margin:'auto'
  },
  font: {
    cardheading: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: "40px",
      color: "#0B1C30",
      fontFamily: 'Outfit'
    },
  }

};
export const ThemeColorContext = createContext({
    color: ThemeColors.primary,
  });
  
export default function ThemeColorWrapper(){}