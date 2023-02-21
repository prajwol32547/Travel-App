import React from 'react'

function RentCard(props) {
  return (
    <div class="container border"style={{maxWidth:'800px',maxHeight:'300px', marginTop:'20px',marginBottom:'20px'}}>
<div className="row no-gutters">
  <div className="col-md-4"><img src={props.image} width={200} height={150} alt="" /></div>
  <div className="col-md-8">
    <div style={{margin:'auto'}}>{props.title}</div>
    <div style={{margin:'auto'}} className="text-truncate">{props.description}</div>
    <div  style={{margin:'auto'}}className="">{props.review} Reviews</div>
</div>
    </div>
    </div>
  )
}

export default RentCard