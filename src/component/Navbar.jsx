import React from 'react'
import img1 from '../assets/logo white.png';

function Navbar() {
  return (
    <div className='container' style={{maxHeight:'100px'}}>
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={img1} width="200" height="100" alt="logo white"/></a>
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
        <li class="nav-item">
          <a class="nav-link text-white font-weight-bold"style={{height:"36",margin:"10x"}} href="#">Login</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
 </div>
  )
}

export default Navbar