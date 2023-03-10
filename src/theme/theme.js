import { createContext } from "react";

export const ThemeColors = {
  primary: "#0B1C30",
  secondary: "#F5F5F5",
  third: "#CAAED6",
  light: "#E7E7E7",
  lightBlack: "#465567",
  other: "#7E7383",
  deactive: "#B3A7B7",
  black: "#000000",
  bgDark: "#0B1C30",
  white: "#FFFFFF",
  icon: "#BA8ACE",
  disable: "#8A9CB0",
  buttonbg: "#E5ECF0",
  inputbg: "#FAFAFA",
  lightBlue: "#4FA4F4",
  selectedInput: "#F0F5FB",
  font: {
    cardheading: {
      fontSize: 'calc(12.62px + 2vmin)',
      fontWeight: 500,
      lineHeight: "40px",
      color: "#0B1C30",
      fontFamily: 'Outfit'
    },
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
      lineHeight: "20px",
      color: "#0B1C30",
      fontFamily: 'Medium'
    },
    NormalTitleHeading: {
      fontFamily: 'Outfit',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: '#465567',
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
      fontFamily: 'Regular',
      fontStyle: "Regular",
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "40px",
    },
    xLargHeading: {
      fontFamily: 'Medium',
      fontWeight: 500,
      fontSize: "36px",
      lineHeight: "45px",
    },
  }
};

export const ThemeColorContext = createContext({
  color: ThemeColors.primary,
});

export default function ThemeColorWrapper() { }