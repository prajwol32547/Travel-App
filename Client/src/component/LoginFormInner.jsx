import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

function LoginFormInner() {
  const emailRef=useRef(null);
  const pwRef=useRef(null);
  const handleLogin=(e)=>{
    e.preventDefault();
   const email=emailRef.current.value;
   const password=pwRef.current.value; 
   Axios.post("http://localhost:4000/user/login",{
    email,
    password
   }).then((res)=>{
    console.log(res);
   }).catch((err)=>{
    console.log(err);
    alert(err);
   
   });}
 
  return (
    <form className='container mt-2 bg-light' onSubmit={handleLogin} style={{maxWidth:'400px'}}>
      <div className="form-group">
<input type="email" placeholder='Email' ref={emailRef}className="form-control"required style={{height:'40px'}}/>

      </div>
      <div className="form-group">
<input type="password" placeholder="password" ref={pwRef} className="form-control" style={{height:'40px'}} required/>

      </div>

<button type="submit" className='btn-lg btn-success text-center text-light w-100 mt-2'>Login</button> 

<p className='text-center mt-3'>Do not have account?<Link to='/register'> Register</Link> </p>
<p className='text-center mt-3'><Link to='/verifyOtp'> Forgot Password</Link> </p>

    </form>
  )
}


export default LoginFormInner;