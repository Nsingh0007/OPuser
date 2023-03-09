import { createContext } from "react";

export const ThemeColors = {
  primary: "",
  secondary: "#F5F5F5",
  third: "#CAAED6",
  light: "#E7E7E7",
  other: "#7E7383",
  deactive: "#B3A7B7",
  black: "#000000",
  white: "#FFFFFF",
  icon: "#BA8ACE",
  disable: "#8A9CB0",
  buttonbg: "#E5ECF0",
  inputbg: "#FAFAFA",
  selectedInput: "#F0F5FB",

  font: {
    SmallHeading: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: "16px",
      color: "#3A3951",
      fontFamily: 'Medium'
    },
    TitleHeading: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: "16px",
      color: "#3A3951",
      fontFamily: 'Medium'
    },
    NormalTitleHeading: {
      fontFamily: 'Outfit',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
    },

    tileHeading: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: "16px",
      color: "#3A3951"
    },

    NormalHeading: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "28px",
      fontFamily: 'Medium'
    },

    cardSubHeading: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: "21px"
    },

    subHeading: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: "23px"
    },
    boldHeading: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: "23px"
    },

    Heading: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "28px"
    },

    largHeading: {
      fontFamily: 'Outfit',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "32px",
      lineHeight: "40px",
    },
  }
};

export const ThemeColorContext = createContext({
  color: ThemeColors.primary,
});

export default function ThemeColorWrapper() { }