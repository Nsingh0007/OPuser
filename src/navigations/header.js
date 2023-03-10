import React from "react";
import CustomButton from "../customComponents/button/customButton";
import { TitleHeading, XLargHeading } from "../customComponents/DynamicText/Heading";
import "../navigations/header.css";
import { ThemeColors } from "../theme/theme";
export default function Header() {
    return (
        <header>
            <XLargHeading text="Online Practice" />
            <div className="H-btn">
                <TitleHeading text="Already have an account?" />
                <CustomButton width="111px" title="Login" type="submit" background={ThemeColors.bgDark} style={{ fontStyle: "normal", fontWeight: 600, fontSize: "16px", lineHeight: "20px" }} />
            </div>
        </header>
    );
}