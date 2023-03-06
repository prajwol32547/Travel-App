import React from 'react'
import bgImg1 from '../assets/mountain.png';
import Navbar from './Navbar';
import HomeForm from './HomeForm'

function LandingDiv() {
  return (
    <div className='container-fluid' style={{height:'80vh', backgroundImage:`url(${bgImg1})`,backgroundRepeat:'no-repeat',backgroundPosition:'top'}}>
        <Navbar /><br />
<HomeForm/>
    </div>
  )
}

export default LandingDiv