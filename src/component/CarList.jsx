import React from 'react'
import CarData from '../assets/CarData'
import RentCard from './RentCard'

function CarList() {
  return (
    <div>
      
{CarData.map((currEle)=>{
  return <RentCard image={currEle.image} description={currEle.description} title={currEle.title} review={currEle.review} />
 })
      }
    </div>
  )
}

export default CarList