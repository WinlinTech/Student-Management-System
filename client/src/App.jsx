import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/Login_SignUp/SignUp';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Pages/Login_SignUp/Login';
import Home from './Pages/Home/Home';


function App() {


  return (
      <BrowserRouter>
        <Routes>
             <Route path='/register' element={<SignUp/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/home' element={<Home/>}/>

        </Routes>
      </BrowserRouter>
  )
}

export default App
