import React from 'react'
import TextField from '../Atom/TextField'

function BookingField() {
  return (
    < div className='bg-light p-3'>
    <div className='d-flex flex-column flex-md-row justify-content-around mt-4'>
<TextField type="date" id="to_book" placeholder="date"/>
<TextField type="date" id="from_book" placeholder="date"/>
<div className="form-group d-flex justify-content-around">
<select className="custom-select" style={{maxWidth:'300px',marginTop:'23px'}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>


    </div>
    <div className="container text-center mt-5">
    <input type='button' className='btn-success btn-md text-white text-center' value="Book Now"/>
   </div>
    </div>
  )
}

export default BookingField