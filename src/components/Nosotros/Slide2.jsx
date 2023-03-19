import React from 'react';
import '../../assets/styles/Nosotros.css';
import designer from '../../assets/gallery/nosotros_designer.png'
import iconConf from '../../assets/gallery/nosotros_icon_conf.png'
import iconInno from '../../assets/gallery/nosotros_icon_inno.png'
import iconCalidad from '../../assets/gallery/nosotros_icon_calidad.png'

const Slide2 = () => {
  return (
    <div className='nos-slide'>
    <h1>Propuesta de Valor</h1>
    <div className="content">
        <div className="nos-slide-text justify-content-between">
            <h1>Llevamos tu startup al siguiente nivel</h1>
            <p>Nos enfocamos en comprender profundamente las necesidades de nuestros clientes, para ofrecer soluciones <b>conecten emocionalmente</b> con su audiencia.</p>
            <p>Somos el <b>aliado creativo</b> y <b>confiable</b> que necesitan nuestros clientes para llevar su negocio al siguiente nivel.</p>
            <div className='nos-slide-text-features'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={iconCalidad}  style={{height:"70px", width:"70px"}}/>
                    <span>Calidad</span>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={iconInno} style={{height:"70px", width:"50px"}} />
                    <span>Innovación</span>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={iconConf}  style={{height:"70px", width:"100px"}}/>
                    <span>Confianza</span>
                </div>
            </div>
        </div>
        <img src={designer} className='nos-slide-img' />
    </div>
</div>
  )
}

export default Slide2