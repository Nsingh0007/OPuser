import { useNavigate } from "react-router-dom";
import CustomButton from "../customComponents/button/customButton";
import { SmallHeading, TitleHeading, XLargHeading } from "../customComponents/DynamicText/Heading";
import AuthStore from "../mobx/auth";
import "../navigations/header.css";
import { ThemeColors } from "../theme/theme";
import CheckAuth from "../utils/hooks/checkAuth";
import { RouteConstant } from "../utils/routes/constant";
import logo from "../assets/images/logo.png"
import { BellIcon } from "../assets/icon/inputIcon";
export default function Header() {
    const path = window.location.href.split('/')
    const myStyle = { fontStyle: "normal", fontWeight: 600, fontSize: "16px", lineHeight: "20px", color: ThemeColors.white }
    const user = AuthStore?.user?.user
    const navigate = useNavigate();
    const isVerified = CheckAuth()
    return (
        <header>
            {!isVerified && <XLargHeading text="KRACKITT" />}
            {isVerified && <img src={logo} alt="logo" />}
            <div className="H-btn">
                {path[4] === "login" &&
                    <>
                        <TitleHeading text="Don’t have any account?" />
                        <CustomButton width="111px" title="Signup" type="submit" background={ThemeColors.bgDark} style={myStyle} func={() => navigate(RouteConstant.signup)} />
                    </>
                }
                {path[4] === "sign-up" &&
                    <>
                        <TitleHeading text="Already have an account?" />
                        <CustomButton width="111px" title="Login" type="submit" background={ThemeColors.bgDark} style={myStyle} func={() => navigate(RouteConstant.login)} />
                    </>
                }
                {isVerified &&
                    <>
                        <BellIcon />
                        <div className="btn-group">
                            <div className=" d-flex gap-2 align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                <SmallHeading text="Nitesh Singh" /><img src={logo} alt="logo" className="profileImg" style={{ width: "24px", height: "24px", borderRadius: "50px" }} />
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>

                    </>
                }
            </div>
        </header>
    );
}