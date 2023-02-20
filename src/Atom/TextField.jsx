import React from 'react'

function TextField(props) {
  return (<>
  <div className='form-group'>
    <label  className="" htmlFor="">{props.title}</label> <br />
    <input type={props.type}  className="form-control" name="" id="signin_input"  style={{height:'40px'}} placeholder={props.place}/></div>
    </>
  )
}

export default TextField