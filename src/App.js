import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Catalogue from './page/Catalogue';
function App() {
  return (
    <BrowserRouter>
    <Routes>
   
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/catalogue' element={<Catalogue/>}/>






    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
