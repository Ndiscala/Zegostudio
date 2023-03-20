import React from 'react';
import '../assets/styles/Servicios.css'

import CardServiciosDesign from '../components/CardServiciosDesign';
import CardServiciosBranding from '../components/CardServiciosBranding';
import CardServiciosRedes from '../components/CardServiciosRedes';

const Servicios = () => {
  return (
    <>
    <div className='section Servicios'>
      <h1>Servicios</h1>
      <div className="card-deck">
        <CardServiciosDesign/> 
        <CardServiciosBranding/>
        <CardServiciosRedes/>
        </div>  
    </div>
    </>
    )
}

export default Servicios