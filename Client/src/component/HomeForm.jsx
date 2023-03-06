import React from 'react'

function HomeForm() {
  return (
<>
    <form className='mx-auto  row no-gutters 'style={{maxWidth:'500px', marginTop:'140px'}}>
       <div className="col-md-9 ">
        <div className="form-group">
            <input type="text" className='form-control' placeholder='Choose your destination'/>
        </div>
       </div>
       <div className="col-md-3 ">
        <div className="form-group">
            <input type="button" className='form-control btn-success' value="search" />
        </div>
       </div>
       
    </form>
    
</>
  )
}

export default HomeForm