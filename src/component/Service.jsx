import React from 'react'
import Data from '../assets/ServiceData';
import ServiceCard from './ServiceCard';

function Service() {
  return (
    <div className="d-flex justify-content-around flex-column flex-md-row " style={{marginTop:'30px'}}>{
        Data.map((currEle)=>{
         return <ServiceCard title={currEle.title} description={currEle.description} image={currEle.image}/>
        })}
</div>
  )
}

export default Service;