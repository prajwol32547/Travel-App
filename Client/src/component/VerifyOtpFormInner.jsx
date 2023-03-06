import React,{useRef} from 'react'

function VerifyOtpFormInner() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const KeepTrack=(e,index)=>{
    const { value } = e.target;

    if (value.length === 1 && index < inputRefs.length - 1) {
      
      inputRefs[index + 1].current.focus();
    }
    else if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  }
  return (
    <div className='container mt-2 bg-light' style={{maxWidth:'300px'}}>
     <div className="d-flex justify-content-around">
     <input type="text" onChange={(e)=>KeepTrack(e,0)} ref={inputRefs[0]} maxLength={1} className='bg-light text-center' style={{maxHeight:'70px',maxWidth:'50px', margin:'5px'}} />
     <input type="text" onChange={(e)=>KeepTrack(e,1)}ref={inputRefs[1]} maxLength={1} className='bg-light text-center' style={{maxHeight:'70px',maxWidth:'50px', margin:'5px'}} />
     <input type="text" onChange={(e)=>KeepTrack(e,2)} ref={inputRefs[2]} maxLength={1} className='bg-light text-center' style={{maxHeight:'70px',maxWidth:'50px', margin:'5px'}} />
     <input type="text" onChange={(e)=>KeepTrack(e,3)} ref={inputRefs[3]} maxLength={1} className='bg-light text-center' style={{maxHeight:'70px',maxWidth:'50px', margin:'5px'}} />
     <input type="text" onChange={(e)=>KeepTrack(e,4)} ref={inputRefs[4]} maxLength={1} className='bg-light text-center' style={{maxHeight:'70px',maxWidth:'50px', margin:'5px'}} />



     </div>
<button className='btn-lg w-100 btn-success text-center text-white mt-4'>Verify Me</button>
<p className='text-center mt-2'>Didn't get a code? <a href="#"> Resend Code</a></p>
    </div>
  )
}

export default VerifyOtpFormInner