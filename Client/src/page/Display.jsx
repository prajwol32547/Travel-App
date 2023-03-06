import React from 'react'
import BookingField from '../component/BookingField'
import DisplayImage from '../component/DisplayImage'
import Properties from '../component/Properties'

function Display() {
  return (
    <div className='container-fluid m-0 p-0'>
        <DisplayImage/>
        <br />
        <BookingField/>
    <Properties/>

    </div>
  )
}

export default Display