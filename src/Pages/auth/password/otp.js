import React, { useEffect, useState } from 'react'
import verifyImg from "../../../assets/images/verifyImg.png"
import { numberOnly } from '../../../assets/regex'
import CustomButton from '../../../customComponents/button/customButton'
import CustomInput from '../../../customComponents/customTextInput'
import { LargHeading, NormalTileHeading } from '../../../customComponents/DynamicText/Heading'
import { ThemeColors } from '../../../theme/theme'

export default function Otp() {
  const [otpfield, setOtpField] = useState(['', '', '', ""])

  useEffect(() => {
  }, [])

  const handleChange = (e, index) => {
    let isNumber = numberOnly.test(e.target.value)
    if (!isNumber) return
    let otpfieldcopy = [...otpfield]
    otpfieldcopy[index] = e.target.value;
    setOtpField(otpfieldcopy)
  }
  const verify = (e) => {
    e.preventDefault();

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
        <div className="Acontainer-flex" style={{ padding: "7% 7% 0 18%" }}>
          <div className='card px-4 py-3 ' style={{ border: "1px solid #D9E3EE", borderRadius: "20px", marginTop: "10rem" }}>
            <LargHeading text='Verify Your Mobile Number' />
            <label>Enter the 4 digit verification code that has been sent to your mobile number
              <b> 1234567890 <a className='pointer' style={{ color: ThemeColors.lightBlue }} onClick={() => { console.log("chnage") }} >(Change)</a>  </b>
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
                <CustomButton title="Continue" type="button" style={{ color: ThemeColors.white }} func={(e) => verify(e)}  background={(otpfield[0] && otpfield[1] && otpfield[2] && otpfield[3] ? ThemeColors?.disable : ThemeColors?.primary)}/>
                <p className='text-center pt-3' >00:00</p>
                <p className='text-center' style={{ fontFamily: 'SemiBold', fontWeight: 400, fontSize: "14px" }} >Haven’t received your OTP yet ? <a className='pointer' style={{ color: ThemeColors.lightBlue }} onClick={() => { console.log("chnage") }} >Resend</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img src={verifyImg} alt="" className="Aright-flex" />
    </div>
  )
}
