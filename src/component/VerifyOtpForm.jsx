import React from 'react'
import VerifyOtpFormInner from './VerifyOtpFormInner'

function VerifyOtpForm() {
  return (
    <div className='Container '>
    <h3 className='text-center'>Enter OTP</h3>
    <p className='text-center'>Enter digit sent to your mail</p>
    <br />
    <VerifyOtpFormInner  />
    </div>
  )
}

export default VerifyOtpForm