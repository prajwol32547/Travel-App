import React,{useEffect, useState} from 'react';
import TextField from '../Atom/TextField';
import {Link} from 'react-router-dom';

function LoginFormInner() {
  const [email,setEmail]=new useState("");
  const [password,setPassword]=new useState("");

  const ValidEmailCheck=(data)=>{
    setEmail(data);
     }
 const ValidCheck=(e)=>{
  e.preventDefault();
if(email===""){
console.log(ValidEmailCheck);}
else{
  console.log(email);
}
 }


  return (
    <div className='container mt-2 bg-light' style={{maxWidth:'400px'}}>
<TextField title="Email" type="text" place="Enter your Email" id="LoginEmail" func={ValidEmailCheck}/>
<TextField title="Password" type="password" place="Enter your password" id="LoginPassword"onChange={(e)=>setPassword=e.target.value} />
<button className='btn-lg btn-success text-center text-light w-100 mt-2' onClick={ValidCheck}>Login</button> 

<p className='text-center mt-3'>Do not have account?<Link to='/register'> Register</Link> </p>
<p className='text-center mt-3'><Link to='/verifyOtp'> Forgot Password</Link> </p>

    </div>
  )
}

export default LoginFormInner