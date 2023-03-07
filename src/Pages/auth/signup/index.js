import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { ClassIcon, EyeIcon, MailIcon, PasswordIcon, Phonenumber, UserIcon } from '../../../assets/icon/inputIcon';
import { emailregex, passwordRegex } from '../../../assets/regex';
import CustomButton from '../../../customComponents/button/customButton';
import CustomCard from '../../../customComponents/card/CustomCard';
import CustomInput from '../../../customComponents/customTextInput';
import FormFooter from '../../../customComponents/form-footer/form-footer';
import CustomSelect from '../../../customComponents/select/customeSelect';
import UnderLineText from '../../../customComponents/under-line-text/underLineText';
export default function Signup({ setHeight, height, width }) {
  const navigate = useNavigate();
  useEffect(() => {
    width <= 480 && setHeight(true)
  }, [setHeight, width])

  const signup = () => {
    console.log("height", height, setHeight)
    setHeight(false)
    navigate("otp")
  }
  const options = ["Class12", "Class11", "Class10"];
  return (
    <>
      <div className='section'>
        <UnderLineText text='Hey, enter your details to get sign up to create your account' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
        <CustomCard>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}

            onSubmit={async (values) => {
              console.log('on submit called')
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Email is Required").matches(emailregex, "Email is not valid"),
              password: Yup.string().required("Password is required").matches(passwordRegex, "Password is not valid"),
              confirmPassword: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same")
              })
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
                <form onSubmit={handleSubmit}>
                  <CustomInput name="fullname" placeholder="Full Name" type="text" lefticon={<UserIcon />} righticon={""} />
                  <CustomInput name="phonenumber" id="phonenumber" onChange={handleChange} placeholder="Mobile Number" type="number" lefticon={<Phonenumber />} />
                  {errors.confirmPassword && touched.confirmPassword && (<div className="input-feedback">{errors.confirmPassword}</div>)}

                  <CustomInput name="email" id="email" onChange={handleChange} placeholder="Email Address" type="text" lefticon={<MailIcon />} righticon={""} values={values} />
                  {errors.email && touched.email && (<div className="input-feedback">{errors.email}</div>)}
                  {/* <Dropdown name="class" placeholder="Class" label="Class" option={options} lefticon={<ClassIcon />} righticon={""} /> */}

                  {/* <CustomSelect options={options} leftIcon={<ClassIcon />} /> */}
                  <CustomInput name="password" id="password" onChange={handleChange} placeholder="Password" type="password" lefticon={<PasswordIcon />} righticon={<EyeIcon />} />
                  {errors.password && touched.password && (<div className="input-feedback">{errors.password}</div>)}

                  <CustomButton title="Signup" type="submit" onClick={signup} />
                  <FormFooter leftText='Already Have An Account' rightClick={Signup} rightText='Login' />
                </form>
              );
            }}
          </Formik>
        </CustomCard>
      </div>
    </>
  )
}
