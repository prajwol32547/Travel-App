import React, { useState } from 'react'
import HotelList from './HotelList';
import CarList from './CarList';
import Weather from './Weather';
import Filter from './Filter';

function CatalgueInner() {
  const [cat,setCat]=new useState('hotel');
  const[weat, setWeat]=new useState('weather');
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <button className='btn-md text-center w-100'onClick={()=>setCat('hotel')}>Hotel</button>
                    </div>
            <div className="col-md-6">
            <button className='btn-md text-center w-100'onClick={()=>setCat('car')}>Car</button>

            </div>

                </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-2">
            <div className="row no-gutters">
                    <div className="col-md-6">
                        <button className='btn-md text-center'data-toggle="collapse" data-target="#Util" aria-expanded="false" aria-controls="Util" onClick={()=>setWeat('weather')}>Temp</button>
                    </div>
            <div className="col-md-6">
            <button className='btn-md text-center'data-toggle="collapse" data-target="#Util" aria-expanded="false" aria-controls="Util" onClick={()=>setWeat('filter')}>Filter</button>

            </div>

                </div>

            </div>
            </div>


        </div>
        <div className="row">
            <div className="col-md-8">
            {cat==='hotel'?<HotelList />:<CarList />}
            </div>
            <div className="collapse col-md-4" id="Util" >
             {weat==='weather'?<Weather />:<Filter />}
            </div>
        
        </div>
   </>
  )
}

export default CatalgueInner