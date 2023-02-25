import React from 'react'

function Add(props) {
  return (
    <div className="container p-4 bg-success">
    <form className='form-group'>
        <div className="form-row">
            <div className="col-md-6"><label htmlFor="" >Name</label><input type="text" placeholder='Name' className="form-control"/></div>
            <div className="col-md-6"><label htmlFor="" >Location</label><input type="text" placeholder='Location' className="form-control"/></div>
        </div>
        <div className="form-row">
            <label htmlFor="" >Description</label>
            <input type="text" className='form-control' />
        </div>
        <div className="form-row">
            <label htmlFor="">Type</label>
        <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>{props.opt1}</option>
        <option>{props.opt2}</option>
        <option>{props.opt3}</option>
        <option>{props.opt4}</option>

      </select>
        </div>
        <input type="button"className="btn-lg mt-4 " value="Add" />
    </form>
    </div>
    )
}

export default Add