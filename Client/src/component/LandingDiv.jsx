import React,{useEffect,useState} from 'react'
import bgImg1 from '../assets/mountain.png';
import Navbar from './Navbar';
import HomeForm from './HomeForm'

function LandingDiv() {
  const [isLogged,setIsLogged]=useState(false);
  useEffect(()=>{
const myData=localStorage.getItem('jwtToken');
const myName=localStorage.getItem('fname');
if(myData){setIsLogged(true);}

  },[])
  return (
    <div className='container-fluid' style={{height:'80vh', backgroundImage:`url(${bgImg1})`,backgroundRepeat:'no-repeat',backgroundPosition:'top'}}>
        <Navbar status={isLogged} name={myName} /><br />
<HomeForm/>
    </div>
  )
}

export default LandingDiv