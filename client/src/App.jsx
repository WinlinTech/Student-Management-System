import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/Login_SignUp/SignUp';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Pages/Login_SignUp/Login';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {


  return (
      <BrowserRouter>
      <Navbar />
      <Footer/>
      <Sidebar/>

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
        
      </BrowserRouter>
  )
}

export default App
