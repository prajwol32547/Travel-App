import React from 'react'
import HotelData from '../assets/HotelData'
import RentCard from './RentCard'
function HotelList() {
  return (
    <>
    {HotelData.map((currEle)=>{
     return <RentCard image={currEle.image} description={currEle.description} title={currEle.title} review={currEle.review} />
    })}
    </>
   
  )
}

export default HotelList