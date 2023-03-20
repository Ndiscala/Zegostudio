import React from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {IoMail} from 'react-icons/io5';
import '../assets/styles/Contacto.css'

const Contacto = () => {
  return (
    <div className="section d-flex justify-content-center">    
      <div className='contacto'>
        <div className='text-panel'>
        <h1 style={{fontSize:"34px"}}>Da el siguiente paso</h1>
        <h3 style={{fontSize:"20px"}}>¡Te queremos conocer!</h3>
        <p style={{fontSize:"16px"}}>Mándanos un mensaje y nuestro equipo de trabajo se contactará contigo</p>
        </div>
        <div className='action-panel '>
          <button style={{fontSize:"14px", backgroundColor:"#449F87"}}><IoLogoWhatsapp/>Hablar por Whatsapp</button>
          <button style={{fontSize:"14px", border:"solid rgba(50, 79, 96, 1) 0.5px"}}><IoMail/>Enviar correo electrónico</button>
        </div>
        <span className='hola' style={{fontSize:"16px"}}>Empieza tu mensaje diciendo<span className="hola-zego">¡Hola Zego!</span> </span>
      </div>
    </div>
  )
}

export default Contacto