import React,{useState} from 'react'

function TextField(props) {
  const [emailtext, setEmailText]=new useState("");
  const handleField=(e)=>{
    setEmailText(e.target.value);
   return props.func(emailtext)
  }
  return (<>
  <div className='form-group'>
    <label  className="" htmlFor="">{props.title}</label> <br />
    <input type={props.type}  className="form-control" name="" id={props.id}  style={{height:'40px'}} placeholder={props.place} onChange={handleField} value={emailtext}/></div>
    </>
  )
}

export default TextField