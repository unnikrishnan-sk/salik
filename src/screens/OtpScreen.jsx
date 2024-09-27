import React from 'react'
import { otpImage } from '../assets'
import CautionComponent from '../components/CautionComponent'

const OtpScreen = () => {

  return (
   <CautionComponent image={otpImage} title="OTP VERIFICATION" desc="Enter 4 digit verification code sent to your number" btnTitle="SUBMIT" link="Send Again"/>
  )
}

export default OtpScreen