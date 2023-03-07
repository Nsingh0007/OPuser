import React from "react";
import CustomButton from "../customComponents/button/customButton";
import "../navigations/header.css";
export default function Header() {
    return (
        <header>
            <div className="logoTest">Online Practice</div>
            <div className="H-btn">
                <div className="H-test">Already have an account?</div>
                <CustomButton width="111px" title="Login" type="submit" />
            </div>
        </header>
    );
}