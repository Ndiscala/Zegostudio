
import React from 'react';
import '../../assets/styles/Nosotros.css';
import BsAs from '../../assets/gallery/nosotros_bsas.jpg'

const Slide1 = () => {
  return (
    <div className='nos-slide'>
        <h1>Nuestra Historia</h1>
        <div className="content">
            <img src={BsAs} className='nos-slide-img' />
            <div className="nos-slide-text">
                <h1>Somos un estudio 100% Argentino</h1>
                <p>Nuestra historia comienza con la pasión por la <b>creatividad</b> y la <b>tecnología</b>. </p>
                <p>Fundado por un equipo de expertos en <b>diseño</b>, <b>desarrollo</b> y <b>estrategias</b> de marketing digital, buscamos crear una agencia que sea diferente de las demás. </p>
            </div>
        </div>
    </div>
  )
}

export default Slide1



