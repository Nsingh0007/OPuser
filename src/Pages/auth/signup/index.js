import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  CrossEyeIcon,
  EyeIcon,
  GoogleIcon,
  MailIcon,
  PasswordIcon,
  Phone,
  UserIcon
} from "../../../assets/icon/inputIcon";
import img from "../../../assets/images/layoutImg.png";
import {
  alphabetOnly,
  emailregex,
  mobileNumber,
  passwordRegex
} from "../../../assets/regex";
import CustomButton from "../../../customComponents/button/customButton";
import CustomInput from "../../../customComponents/customTextInput";
import {
  LargHeading,
  NormalTileHeading
} from "../../../customComponents/DynamicText/Heading";
import AuthServices from "../../../services/AuthService";
import { ThemeColors } from "../../../theme/theme";
import { RouteConstant } from "../../../utils/routes/constant";
import "./signup.scss";

export default function Signup({ setHeight, width }) {
  const navigate = useNavigate();
  const [toggleIcon, setToggleIcon] = useState(false);

  useEffect(() => {
    width <= 480 && setHeight(true);
  }, [setHeight, width]);

  const SignUp = async (data) => {
    const res = await AuthServices.signUp(data)
     console.log("res", res)
    if (res?.isSuccess) {
      navigate(RouteConstant.verification)
      toast.success(res?.messages)
    }
    else {
      toast.error(res?.messages)
    }
  }
  return (
    <>
      <div className="Aouterflex">
        <div className="Aleft-flex">
          <div className="Acontainer-flex">
            <div
              className="card px-3 py-3"
              style={{ border: "1px solid #D9E3EE", borderRadius: "20px" }}
            >
              <Formik
                initialValues={{
                  fullName: "",
                  mobileNumber: "",
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  console.log("on submit called", values);
                  values.mobileNumber = `${values?.mobileNumber}`;
                  SignUp(values);
                }}
                validationSchema={Yup.object().shape({
                  fullName: Yup.string()
                    .required("Full Name is Required")
                    .matches(alphabetOnly, "Full name is not valid"),
                  mobileNumber: Yup.string()
                    .required("Mobile Number is Required")
                    .matches(mobileNumber, "Number is not valid"),
                  email: Yup.string()
                    .email()
                    .required("Email is Required")
                    .matches(emailregex, "Email is not valid"),
                  password: Yup.string()
                    .required("Password is required")
                    .matches(passwordRegex, "Password is not valid"),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    isValid,
                    handleChange,
                    handleSubmit,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="row m-0 pt-3">
                        <LargHeading text="Hey, enter your details to get sign up to create your account" />
                        <NormalTileHeading text="When an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                        <div className="col-12 mb-3 pb-1 mt-4 pt-1">
                          <CustomInput
                            name="fullName"
                            type="text"
                            value={values?.fullName}
                            onChange={handleChange}
                            lefticon={<UserIcon />}
                            righticon={""}
                            label={"Full Name"}
                            placeholder={"Enter Full Name"}
                          />
                          {errors?.fullName && touched?.fullName && (
                            <div className="input-feedback">
                              {errors?.fullName}
                            </div>
                          )}
                        </div>
                        <div className="col-12 mb-3 pb-1">
                          <CustomInput
                            name="mobileNumber"
                            id="mobileNumber"
                            value={values?.mobileNumber}
                            onChange={handleChange}
                            type="number"
                            lefticon={<Phone />}
                            label={"Mobile Number"}
                            placeholder={"Enter Mobile Number"}
                          />
                          {errors?.mobileNumber && touched?.mobileNumber && (
                            <div className="input-feedback">
                              {errors?.mobileNumber}
                            </div>
                          )}
                        </div>
                        <div className="col-12 mb-3 pb-1">
                          <CustomInput
                            name="email"
                            id="email"
                            value={values?.email}
                            onChange={handleChange}
                            label="Email"
                            type="text"
                            lefticon={<MailIcon />}
                            righticon={""}
                            placeholder={"Enter Email Address"}
                          />
                          {errors?.email && touched?.email && (
                            <div className="input-feedback">
                              {errors?.email}
                            </div>
                          )}
                        </div>
                        <div className="col-12 mb-3 pb-1">
                          <CustomInput
                            name="password"
                            id="password"
                            value={values?.password}
                            onChange={handleChange}
                            label="Password"
                            type={!toggleIcon ? "password" : "text"}
                            lefticon={<PasswordIcon />}
                            righticon={
                              !toggleIcon ? <EyeIcon /> : <CrossEyeIcon />
                            }
                            placeholder={"Enter Your Password"}
                            rightIconFunc={() => {
                              setToggleIcon(!toggleIcon);
                            }}
                          />
                          {errors?.password && touched?.password && (
                            <div className="input-feedback">
                              {errors?.password}
                            </div>
                          )}
                        </div>
                        <div className="col-12 mb-3 pb-1">
                          {/* <CustomButton title="Signup" type="submit" background={isValid ? ThemeColors.bgDark : ThemeColors.disable} disable={!isValid}/> */}
                          <CustomButton title="Signup" type="submit" background={(values?.fullName && values?.email && values?.mobileNumber && values?.password) ? ThemeColors.bgDark : ThemeColors.disable} />
                        </div>
                        <div className="col-12 mb-3 pb-1">
                          <CustomButton
                            title="Continue with Google"
                            icon={<GoogleIcon />}
                            type="button"
                            background={ThemeColors.inputbg}
                            style={{
                              color: "black",
                              fontFamily: "Medium",
                              fontStyle: "Medium",
                              fontWeight: 500,
                              fontSize: "16px",
                              lineHeight: "20px",
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                            }}
                            iconStyle={{
                              textAlign: "start",
                            }}
                            titleStyle={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
        <img src={img} alt="" className="Aright-flex" />
      </div>
    </>
  );
}
