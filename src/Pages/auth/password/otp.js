import { observer } from "mobx-react-lite";
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Phone } from '../../../assets/icon/inputIcon';
import verifyImg from "../../../assets/images/verifyImg.png";
import { numberOnly } from '../../../assets/regex';
import CustomButton from '../../../customComponents/button/customButton';
import ModalPopup from '../../../customComponents/customModals/CustomModal';
import CustomInput from '../../../customComponents/customTextInput';
import { LargHeading, NormalTileHeading, SmallHeading } from '../../../customComponents/DynamicText/Heading';
import { ThemeColors } from '../../../theme/theme';
import GetOTP from '../../../utils/hooks/getOTP';
import { RouteConstant } from '../../../utils/routes/constant';
import jwt_decode from "jwt-decode";
import AuthServices from "../../../services/AuthService";
let intervalHandle;
let secondsRemaining;

function Otp() {
  const user = JSON.parse(localStorage.getItem("key"))?.user;
  const navigate = useNavigate()
  const [otpfield, setOtpField] = useState(['', '', '', ""])
  const [modal, setModal] = useState(false)
  const [mobileNumber, setMobileNumber] = useState(user?.mobileNumber)
  const [time, setTime] = useState({ value: 0, seconds: 0 });
  const [otp, setOtp] = useState();
 
  useLayoutEffect(() => {
    setMobileNumber(user?.mobileNumber)
  }, [])
  useEffect(() => {
    getOTPCode(user?.mobileNumber);
  }, [])

  const getOTPCode = async (mobileNumber) => {
    const res = await GetOTP(mobileNumber, "Signup")
    // console.log("res", res)
    if (res?.isSuccess) {
      startCountDown();
      toast.success(res?.messages)
      setOtp(atob(res?.data?.otp))
      console.log("otp",atob(res?.data?.otp))
    }
  }

  const startCountDown = () => {
    clearInterval(intervalHandle);
    setTime({
      seconds: 0,
      value: 0
    })
    const { value } = time;
    intervalHandle = setInterval(Timer, 1000);
    secondsRemaining = 120;
  };

  const Timer = () => {
    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining - min * 60;
    setTime({
      value: min,
      seconds: sec
    });
    if ((min === 0) & (sec === 0)) {
      clearInterval(intervalHandle);
    }
    return secondsRemaining--;
  }

  const handleChange = (e, index) => {
    let isNumber = numberOnly.test(e.target.value)
    if (!isNumber) return
    let otpfieldcopy = [...otpfield]
    otpfieldcopy[index] = e.target.value;
    setOtpField(otpfieldcopy)
  }

  const verify = async (e) => {
    e.preventDefault();
    clearInterval(intervalHandle);
    setTime({
      seconds: 0,
      value: 0
    })
    let OTP = otpfield[0] + otpfield[1] + otpfield[2] + otpfield[3];
    if (OTP === otp) {
   let payload ={
    id: user?.userId,
    email: user?.email,
    isVerified:true,
    mobileNumber: mobileNumber,
    fullName: user?.name,
    profileImage: "",
    instituteId: "00000000-0000-0000-0000-000000000000",
    subcourseId: "00000000-0000-0000-0000-000000000000"
   }
      const updateProfile = await AuthServices?.updateProfile(payload);
      if(updateProfile){
       navigate(RouteConstant.dashboard)
      }
    }
    else {
      toast.error("OTP did not Matched..")
    }
  }

  const inputfocus = (elmnt, ind) => {
    const index = elmnt.target.tabIndex
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      let otpfieldcopy = [...otpfield]
      otpfieldcopy[ind] = '';
      setOtpField(otpfieldcopy)
      const next = index - 1;
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      const next = index + 1;
      let num = numberOnly.test(elmnt.target.form.elements[index].value)
      if (next < 6 && num) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }

  return (
    <div className="Aouterflex">
      <div className="Aleft-flex">
        <div className="Acontainer-flex" >
          <div className='card px-4 py-3 ' style={{ border: "1px solid #D9E3EE", borderRadius: "20px", marginTop: "10rem" }}>
            <LargHeading text='Verify Your Mobile Number' />
            <label style={{ color: ThemeColors.lightBlack }}>Enter the 4 digit verification code that has been sent to your mobile number
              <b> {mobileNumber} <a className='pointer' style={{ color: ThemeColors.lightBlue }} onClick={() => { setModal(true) }} >(Change)</a>  </b>
            </label>
            <NormalTileHeading text="Please verify your mobile number to continue." />
            <div>
              <form>
                <div className='pb-3 d-flex justify-content-center' style={{ gap: "20px" }}>
                  {
                    otpfield.map((item, i) =>
                      <CustomInput key={i} name="text" placeholder={"-"} type="text" inputRef={i === 0 && true} value={item} autoComplete="off" label={item} tabIndex={i} maxLength="1" onClick={handleChange} onKeyUp={inputfocus} />
                    )
                  }
                </div>
                <CustomButton title="Continue" type="button" style={{ color: ThemeColors.white }} func={(e) => verify(e)} disable={(otpfield[0] && otpfield[1] && otpfield[2] && otpfield[3] ? false : true)} />
                {/* <CustomButton title="Continue" type="button" style={{ color: ThemeColors.white }} func={(e) => verify(e)} background={(otpfield[0] && otpfield[1] && otpfield[2] && otpfield[3] ? ThemeColors?.disable : ThemeColors?.primary)} /> */}
                <div className='text-center py-3'>
                  {time?.value !== 0 && time?.value !== 120 && < SmallHeading text={time.value + ":" + time.seconds} />}
                </div>
                {/* <p className='text-center pt-3' >00:00</p> */}
                <p className='text-center' style={{ fontFamily: 'SemiBold', fontWeight: 400, fontSize: "14px" }} >Haven’t received your OTP yet ? <a className='pointer' style={{ color: ThemeColors.lightBlue }} onClick={() => { getOTPCode(mobileNumber) }} >Resend</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img src={verifyImg} alt="" className="Aright-flex" />
      {
        modal &&
        <ModalPopup
          width={"100%"}
          isFooter={false}
          CloseModalFunc={() => setModal(false)}
        >
          <div className="card border-0 mb-3">
            <LargHeading text="Change Mobile Number" />
          </div>
          <CustomInput value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} type="number" lefticon={<Phone />} label={"Mobile Number"} placeholder={"Enter Mobile Number"} />
          <div className='py-4'>
            <CustomButton title="Continue" func={() => { getOTPCode(mobileNumber); setModal(false) }} />
          </div>
        </ModalPopup>
      }
    </div>
  )
}
export default observer(Otp);
