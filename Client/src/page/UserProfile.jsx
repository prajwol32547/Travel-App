import React from 'react'
import img1 from '../assets/mountain.png'

function UserProfile() {
  return (
    <div className='container text-center'>
        <img src={img1} alt="" className='rounded-circle' width={150} height={150} />

    </div>
  )
}

export default UserProfile