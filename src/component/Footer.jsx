import React from 'react'
import img1 from '../assets/logo.png'

function Footer() {
  return (
    <div className='Container-fluid m-0 p-0'>
       
       <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className=""
        >
          <path
            fill="#1d78741a"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,69.3C480,53,600,43,720,53.3C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="container-fluid" style={{background:'#1d78741a',marginTop:'-8px'}}>
        <img src={img1} className="img-fluid"style={{maxWidth:'200px',maxHeight:'90px',zIndex:'1', marginTop:'10Px',marginLeft:'30px'}}/>
        <br />
        <div className="d-flex flex-column justify-content-around flex-md-row mt-3">
          <section className='text-center text-md-start'>
            <p className='font-weight-bold text-success '> Call Now</p>
            <p className='mt-2'>chabahil, kathmandu</p>
          </section>
          <section className='text-center text-md-start'>
            <p className='font-weight-bold  text-dark'> Quick Links</p>
            <p className='mt-2'>Travel Website</p>
            <p className=''>Brands</p>
            <p className=''>Featured products</p>
          </section>
          <section className='text-center text-md-start'>
            <p className='font-weight-bold  text-dark'>Information</p>
            <p className='mt-2'>Privacy policy</p>
            <p className=''>Terms and condition</p>
            <p className=''>FAQ's</p>
          </section>
        </div>
        </div>
        </div>
        
    
  )
}

export default Footer