import React,{useState} from 'react'

function Filter() {
  
  const [rangeValue, setRangeValue] = useState(5000);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
   
  };
  const filterChoice=(e)=>{
    e.preventDefault();
    localStorage.setItem('price',rangeValue);
  }
  return (
   
    <form className='container form-group'>
<div className="d-flex flex-column justify-content-around">

  <section id="HotelType" className='form-group'>
<h5>Hotel Class</h5>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label class="form-check-label" for="exampleRadios1">
    1 to 4
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    5 to 6
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label class="form-check-label" for="exampleRadios3">
    7 to 8
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
  <label class="form-check-label" for="exampleRadios4">
    8 +
  </label>
 </div>
</section>
<section id="Price Range" className="form-group">
          <h5>Price Range</h5>
          <input type="text" className='form-control' value={rangeValue} placeholder={rangeValue} id="rangeValue" />
          <div class="form-group">
            <label for="formControlRange">Example Range input</label>
            <input type="range" class="form-control-range" id="formControlRangeVal" defaultValue={1000} min={500} max={5000} value={rangeValue} onChange={handleRangeChange} />
          </div>
        </section>
  <section id="CarType">
  <h5>Car Type</h5>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios1" value="option1"/>
  <label class="form-check-label" for="exampleRadios1">
    Small
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Medium
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios3" value="option3" />
  <label class="form-check-label" for="exampleRadios3">
    SUV
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios4" value="option4" />
  <label class="form-check-label" for="exampleRadios4">
    Luxury
  </label>
 </div>
  </section>
  <br />
  <input type="button" onClick={filterChoice} className='btn-success w-100 btn-lg' value="Apply Filter"/>
</div>
    </form>
 
  )
}

export default Filter