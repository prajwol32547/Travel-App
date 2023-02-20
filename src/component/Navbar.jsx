import React from 'react'
import img1 from '../assests/logo.png';

function Navbar() {
  return (
    <div className='container' style={{height:'150px'}}>
        <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={img1} width="30" height="30" alt=""/>
  </a>
</nav>
        
         </div>
  )
}

export default Navbar