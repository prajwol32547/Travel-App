import React from 'react';
import TextField from '../Atom/TextField';
import {Link} from 'react-router-dom';

function LoginFormInner() {
  return (
    <div className='container mt-2 bg-light' style={{maxWidth:'400px'}}>
<TextField title="Email" type="text" place="Enter your Email" />
<TextField title="Password" type="password" place="Enter your password" />
<button className='btn-lg btn-success text-center text-light w-100 mt-2'>Login</button> 

<p className='text-center mt-3'>Do not have account?<Link to='/register'> Register</Link> </p>
    </div>
  )
}

export default LoginFormInner