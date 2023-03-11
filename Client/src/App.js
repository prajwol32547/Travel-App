import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Catalogue from './page/Catalogue';
import Display from './page/Display';
import VerifyOtp from './page/VerifyOtp';
import Add from './page/Add';
import Admin from './page/Admin';




function App() {
  return (
    <BrowserRouter>
    <Routes>
   
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/catalogue' element={<Catalogue/>}/>
<Route path='/display' element={<Display/>}/>
<Route path='/verifyOtp' element={<VerifyOtp/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/admin' element={<Admin/>}/>










    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
