import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { CrossEyeIcon, EyeIcon, MailIcon, PasswordIcon, Phone, UserIcon } from '../../../assets/icon/inputIcon';
import { alphabetOnly, emailregex, mobileNumber, passwordRegex } from '../../../assets/regex';
import CustomButton from '../../../customComponents/button/customButton';
import CustomInput from '../../../customComponents/customTextInput';
import { LargHeading, NormalTileHeading } from '../../../customComponents/DynamicText/Heading';
import { ThemeColors } from '../../../theme/theme';
import "./signup.scss";
import img from '../../../assets/images/layoutImg.png';

export default function Signup({ setHeight, height, width }) {
  const navigate = useNavigate();
  const [toggleIcon, setToggleIcon] = useState(false)
  useEffect(() => {
    width <= 480 && setHeight(true)
  }, [setHeight, width])

  const Login = () => {
    console.log("height", height, setHeight)
    setHeight(false)
    navigate("/")
  }
  return (
    <>
      <div className='card px-3 py-5' style={{ border: "1px solid #D9E3EE", borderRadius: "20px", background: ThemeColors.inputbg }}>
        <Formik
          initialValues={{ fullName: "", mobileNumber: "", email: '', password: '', }}
          onSubmit={async (values) => {
            console.log('on submit called', values)
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string().email().required("Full Name is Required").matches(alphabetOnly, "Full name is not valid"),
            mobileNumber: Yup.string().email().required("Mobile Number is Required").matches(mobileNumber, "Number is not valid"),
            email: Yup.string().email().required("Email is Required").matches(emailregex, "Email is not valid"),
            password: Yup.string().required("Password is required").matches(passwordRegex, "Password is not valid"),
            // confirmPassword: Yup.string().when("password", {
            //   is: val => (val && val.length > 0 ? true : false),
            //   then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same")
            // })
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
              <form onSubmit={handleSubmit} className="" >

                <div className="row m-0">
                  <LargHeading text='Hey, enter your details to get sign up to create your account' />
                  <NormalTileHeading text="When an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                  <div className="col-12 mb-3 pb-1 mt-4 pt-1">
                    <CustomInput name="fullName" type="text" value={values.fullName} onChange={handleChange} lefticon={<UserIcon />} righticon={""} label={"Full Name"} placeholder={"Enter Full Name"} />
                    {errors.fullName && touched.fullName && (<div className="input-feedback">{errors.fullName}</div>)}
                  </div>
                  <div className="col-12 mb-3 pb-1">
                    <CustomInput name="mobileNumber" id="mobileNumber" value={values.mobileNumber} onChange={handleChange} type="number" lefticon={<Phone />} label={"Mobile Number"} placeholder={"Enter Mobile Number"} />
                    {errors.mobileNumber && touched.mobileNumber && (<div className="input-feedback">{errors.mobileNumber}</div>)}
                  </div>
                  <div className="col-12 mb-3 pb-1">
                    <CustomInput name="email" id="email" value={values.email} onChange={handleChange} label="Email" type="text" lefticon={<MailIcon />} righticon={""} placeholder={"Enter Email Address"} />
                    {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                  </div>
                  <div className="col-12 mb-3 pb-1">
                    <CustomInput name="password" id="password" value={values.password} onChange={handleChange} label="Password" type={!toggleIcon ? "password" : "text"} lefticon={<PasswordIcon />} righticon={!toggleIcon ? <EyeIcon /> : <CrossEyeIcon />} placeholder={"Enter Your Password"} rightIconFunc={() => { setToggleIcon(!toggleIcon) }} />
                    {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}
                  </div>
                  <div className="col-12 mb-3 pb-1">
                    <CustomButton title="Signup" type="submit" />
                  </div>
                  {/* <FormFooter leftText='Already Have An Account' rightClick={Login} rightText='Login' /> */}

                </div>
              </form>
            );
          }}
        </Formik>
        <img src={img} alt="" className="right-flex" />
      </div>
    </>
  )
}
