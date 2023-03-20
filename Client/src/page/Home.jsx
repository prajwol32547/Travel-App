import React,{useEffect,useState} from 'react'
import LandingDiv from '../component/LandingDiv';
import Service from '../component/Service';
import Footer from '../component/Footer';
import TrendingDestination from '../component/TrendingDestination';

function Home() {

  return (
    <div className='container-fluid m-0 p-0'>
<LandingDiv />

        <Service />
        <br />
        <TrendingDestination/>
        <Footer/>
    </div>
  )
}

export default Home