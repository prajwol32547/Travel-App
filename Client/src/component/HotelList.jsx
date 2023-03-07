import React,{ useState} from 'react'
import HotelData from '../assets/HotelData'
import RentCard from './RentCard'
import { Navigator, useNavigate } from 'react-router-dom'

function HotelList() {

  const navigate= useNavigate();
  const [dataVal,setDataVal] =useState([]);
  const handleDisplay=(data)=>{
setDataVal([
 data

]);
navigate('/display');
  }
  return (
    <>
    {HotelData.map((currEle)=>{
     return <RentCard image={currEle.image} description={currEle.description} title={currEle.title} review={currEle.review} func={handleDisplay} />
   })}
    </>
   
  )
}

export default HotelList