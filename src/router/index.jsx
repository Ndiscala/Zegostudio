import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../views/Home.jsx';
import Contacto from '../views/Contacto.jsx';
import Nosotros from '../views/Nosotros.jsx';
import Portafolio from '../views/Portafolio.jsx';
import Servicios from '../views/Servicios.jsx';

const Router = ()=>{
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/nosotros' element={<Nosotros/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/servicios' element={<Servicios/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router;