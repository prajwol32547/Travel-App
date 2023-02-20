import React from 'react';
import TextField from '../Atom/TextField';
function RegisterFormInner() {
  return (
    <div className='container mt-2 bg-light' style={{maxWidth:'400px'}}>
        <div className="row">
            <div className="col-md-6"> 
<TextField title="First Name" type="text" place="Enter your first name" />

            </div>
            <div className="col-md-6">
<TextField title="Last Name" type="text" place="Enter your last name" />

            </div>
        </div>
<TextField title="Email" type="text" place="Enter your Email" />
<TextField title="Password" type="password" place="Enter your password" />
<TextField title="Re-Password" type="password" place="Enter your password again" />

<button className='btn-lg btn-success text-center text-light w-100 mt-2'>Create Account</button>
<p className='mt-2 text-center'>Already have account? <a href="#">Login</a></p>
</div>
  )
}

export default RegisterFormInner