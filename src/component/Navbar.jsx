import React from 'react'
import img1 from '../assets/logo white.png';
import {Link} from 'react-router-dom';

function Navbar() {
  const isLoggedIn=false;
  return (
    <div className='container' style={{maxHeight:'100px'}}>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={img1} style={{maxWidth:"200px", maxHeight:"100px"}} alt="logo white"/></a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-1 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-white font-weight-bold"style={{height:"36",margin:"10px"}} aria-current="page" href="#">Nepal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white font-weight-bold"style={{height:"36",margin:"10px"}} href="#">NPR</a>
        </li>
        {isLoggedIn===true?"":
        <li class="nav-item">
          <Link className="nav-link text-white font-weight-bold"style={{height:"36",margin:"10px"}} to="/login">Login</Link>
        </li>}
        {isLoggedIn===false?"":
        <li class="nav-item">
          <Link className="nav-link text-white font-weight-bold"style={{height:"36",margin:"10px"}} to="/login">Hello, Prajwol</Link>
        </li>}
       
      </ul>
     
    </div>
  </div>
</nav>
 </div>
  )
}

export default Navbar