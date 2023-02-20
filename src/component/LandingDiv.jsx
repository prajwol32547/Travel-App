import React from 'react'
import bgImg from '../assets/bg image.png';
import Navbar from './Navbar';

function LandingDiv() {
  return (
    <div className='container-fluid bg-dark' style={{height:'80vh',backgroundImage:`url(${bgImg})`}}>
        <Navbar />

    </div>
  )
}

export default LandingDiv