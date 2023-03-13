import { useNavigate } from "react-router-dom";
import CustomButton from "../customComponents/button/customButton";
import { TitleHeading, XLargHeading } from "../customComponents/DynamicText/Heading";
import "../navigations/header.css";
import { ThemeColors } from "../theme/theme";
import { RouteConstant } from "../utils/routes/constant";
export default function Header() {
    const path = window.location.href.split('/')
    const myStyle = { fontStyle: "normal", fontWeight: 600, fontSize: "16px", lineHeight: "20px", color: ThemeColors.white }
    const navigate = useNavigate();
    return (
        <header>
            <XLargHeading text="Online Practice" />
            <div className="H-btn">
                {path[4] === "login" ?
                    <>
                        <TitleHeading text="Don’t have any account?" />
                        <CustomButton width="111px" title="Signup" type="submit" background={ThemeColors.bgDark} style={myStyle} func={() => navigate(RouteConstant.signup)} />
                    </>
                    :
                    <>
                        <TitleHeading text="Already have an account?" />
                        <CustomButton width="111px" title="Login" type="submit" background={ThemeColors.bgDark} style={myStyle} func={() => navigate(RouteConstant.login)} />
                    </>}
            </div>
        </header>
    );
}