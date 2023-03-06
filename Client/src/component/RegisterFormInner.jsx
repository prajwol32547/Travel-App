import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
function RegisterFormInner() {
  const firstRef=useRef(null);
const LastRef=useRef(null);
const emailRef=useRef(null);
const passwordRef=useRef(null);

  const Regis=(e)=>{
    e.preventDefault();
const firstName=firstRef.current.value;
const lastName=LastRef.current.value;
const email=emailRef.current.value;
const password=passwordRef.current.value;
console.log(firstName,lastName,email,password);
Axios.post("http://localhost:4000/user/register",{
  firstName,
  lastName,
  email,
  password
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
console.log(err);
alert(err.response.statusText);
})
}
  return (
   
    <div className='container bg-light' style={{maxWidth:'400px'}}>
       <form onSubmit={Regis}>
        <div className="row">
            <div className="col-md-6"> 
            <div className='form-group'>
    <label  className="" htmlFor="">First Name</label> <br />
    <input type="text"  className="form-control" ref={firstRef} name="" style={{height:'40px'}} placeholder="first name" /></div>

            </div>
            <div className="col-md-6">
            <div className='form-group'>
    <label  className="" htmlFor="">Last Name</label> <br />
    <input type="text" className="form-control" ref={LastRef} name="" id="" style={{height:'40px'}} placeholder="Last Name" /></div>

            </div>
        </div>
        <div className='form-group'>
    <label  className="" htmlFor="">Email</label> <br />
    <input type="email"  className="form-control" ref={emailRef} name="" id=""  style={{height:'40px'}} placeholder="email"/></div>
    <div className='form-group'>
    <label  className="" htmlFor="">Password</label> <br />
    <input type="password"  className="form-control" ref={passwordRef} name="" id=""  style={{height:'40px'}} placeholder="password"/></div>

<button type="submit"className='btn-lg btn-success text-center text-light w-100 mt-2'>Create Account</button>
</form>
<p className='mt-2 text-center'>Already have account? <Link to='/login'> Login</Link></p>
</div>

  )
}

export default RegisterFormInner