import React from 'react'
import OtpField from '../Atom/OtpField'

function VerifyOtpFormInner() {
  return (
    <div className='container mt-2 bg-light' style={{maxWidth:'300px'}}>
     <div className="d-flex justify-content-around">
<OtpField/>
<OtpField/>
<OtpField/>
<OtpField/>
<OtpField/>
     </div>
<button className='btn-lg w-100 btn-success text-center text-white mt-4'>Verify Me</button>
<p className='text-center mt-2'>Didn't get a code? <a href="#"> Resend Code</a></p>
    </div>
  )
}

export default VerifyOtpFormInner