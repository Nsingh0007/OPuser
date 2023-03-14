import { Formik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  CrossEyeIcon,
  EyeIcon,
  GoogleIcon, PasswordIcon,
  UserIcon
} from "../../../assets/icon/inputIcon";
import img from "../../../assets/images/layoutImg.png";
import { emailregex, passwordRegex } from "../../../assets/regex";
import CustomButton from "../../../customComponents/button/customButton";
import Checkbox from "../../../customComponents/checkbox/Checkbox";
import CustomInput from "../../../customComponents/customTextInput";
import { LargHeading, NormalTileHeading, SmallHeading } from "../../../customComponents/DynamicText/Heading";
import AuthServices from "../../../services/AuthService";
import { ThemeColors } from "../../../theme/theme";
const LoginPage = () => {
  const [toggleIcon, setToggleIcon] = useState(false)
  const login = async (data) => {
    const res = await AuthServices.login(data)
    console.log("res", res)
    if (res?.isSuccess) {
      toast.success(res?.messages)
    }
    else {
      toast.error(res?.messages)
    }

  }

  return (
    <div className="Aouterflex">
      <div className="Aleft-flex">
        <div className="Acontainer-flex">
          <div className='card px-3 py-3' style={{ border: "1px solid #D9E3EE", borderRadius: "20px", }}>
            <Formik
              initialValues={{ email: '', password: '', }}
              onSubmit={async (values) => {
                console.log('on submit called', values)
                login(values)
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required("Email is Required").matches(emailregex, "Email is not valid"),
                password: Yup.string().required("Password is required").matches(passwordRegex, "Password is not valid"),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit} >
                    <div className="row m-0 pt-3 ">
                      <LargHeading text='Let’s sign you in!' />
                      <NormalTileHeading text="Welcome back, you have been missed!" />
                      <div className="col-12 mb-3 pb-1 mt-3">
                        <CustomInput name="email" id="email" value={values.email} onChange={handleChange} label="Email" type="text" lefticon={<UserIcon />} righticon={""} placeholder={"Mobile/Email"} />
                        {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                      </div>
                      <div className="col-12 mb-3 pb-1">
                        <CustomInput name="password" id="password" value={values.password} onChange={handleChange} label="Password" type={!toggleIcon ? "password" : "text"} lefticon={<PasswordIcon />} righticon={!toggleIcon ? <EyeIcon /> : <CrossEyeIcon />} placeholder={"Enter Your Password"} rightIconFunc={() => { setToggleIcon(!toggleIcon) }} />
                        {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                      </div>
                      <div className="col-12 mb-3 pb-1">
                        <CustomButton title="Login" type="submit" background={(values?.email && values?.password) ? ThemeColors.bgDark : ThemeColors.disable} />
                      </div>
                      <div className="col-12 mb-3 pb-1 d-flex justify-content-between">
                        <div className="d-flex gap-2" ><Checkbox /><SmallHeading text="Remember password" /></div>
                        <div className="text-center"><SmallHeading text="Forgot password?" /></div>
                      </div>
                      <div className="col-12 mb-3 pb-1 ">
                        <CustomButton title="Continue with Google" icon={<GoogleIcon />} type="button" background={ThemeColors.inputbg}
                          style={{
                            color: "black",
                            fontFamily: 'Medium',
                            fontStyle: "Medium",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "20px",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center"
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
  );
};

export default LoginPage;
