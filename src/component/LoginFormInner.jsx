import React from 'react';
import TextField from '../Atom/TextField';

function LoginFormInner() {
  return (
    <div className='container mt-2 bg-light' style={{maxWidth:'400px'}}>
<TextField title="Email" type="text" place="Enter your Email" />
<TextField title="Password" type="password" place="Enter your password" />
<button className='btn-lg btn-success text-center text-light w-100 mt-2'>Login</button> 
    </div>
  )
}

export default LoginFormInner