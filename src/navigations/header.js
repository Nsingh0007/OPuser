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
    const navigate = useNavigate();
    const isVerified = CheckAuth()
    return (
        <header>
            {/* {!isVerified && <XLargHeading text="Online Practice" />} */}
            {!isVerified && <img src={logo} alt="logo" />}
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
                {!isVerified &&
                    <>
                        <BellIcon />
                        <SmallHeading text="Nitesh Singh" />
                        <div className="dropdown ">
                            <div
                                className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none  show"
                                data-bs-toggle="dropdown"
                                aria-expanded="true"
                            >
                                <img
                                    // src={auth.profileImage ? auth.profileImage : img}
                                    alt="pic"
                                    width="35"
                                    height="35"
                                    className="rounded-circle"
                                />
                                <div
                                    style={{ minWidth: "max-content" }}
                                    className="d-flex flex-column ms-2 justify-content-start text-start"
                                >
                                    {/* <span
                                        style={{ width: "50px", paddingInline: "2px " }}
                                        className="badge text-bg-primary  fs-7"
                                    >
                                        {auth?.role}
                                    </span> */}
                                    <div style={{ gap: "10px" }} className="d-flex w-100">
                                        {/* <span>{auth?.name}</span> */}
                                        {/* <span>Anjali Dubey</span> */}
                                        <div>
                                            {/* <DownArrowIcon /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul
                                className="dropdown-menu text-small shadow "
                                data-popper-placement="top-start"
                            >
                                <li onClick={() => navigate('/settings')}>
                                    <div className="dropdown-item" >
                                        Profile
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <div
                                        className="dropdown-item"
                                        onClick={() => {
                                            // signOut();
                                        }}
                                    >
                                        Sign out
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </div>
        </header>
    );
}