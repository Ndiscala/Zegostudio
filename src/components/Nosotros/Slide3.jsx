import React from 'react'
import '../../assets/styles/Nosotros.css';
import iconEmpatizar from '../../assets/gallery/nosotros_3_empatizar.png';
import iconIdea from '../../assets/gallery/nosotros_3_idea.png';
import iconObj from '../../assets/gallery/nosotros_3_objetivos.png';
import iconPrototip from '../../assets/gallery/nosotros_3_prototipar.png';
import iconTest from '../../assets/gallery/nosotros_3_test.png';

const Slide3 = () => {
  return (
    <div className='nos-slide slide-proceso'>
    <h1>Proceso de diseño</h1>
        <div className="nos-slide-text" style={{textAlign:"center",marginTop:"2rem"}}>
            <p>Trabajamos bajo la metodología de <b>Diseño Centrada en el Usuario</b>, una práctica de diseño en dónde nos enfocamos en las necesidades del usuario siguiendo sus 4 principios: </p>
        </div>
    <div className="nos-proceso">
        <div className=" nos-proceso-row1">
            <div className="nos-proceso-item">
                <img src={iconEmpatizar} className="nos-proceso-icon" />
                <span className="nos-proceso-item-txt">Empatizar con usuarios</span>
            </div>
            <div className="nos-proceso-item">
                <img src={iconIdea} className="nos-proceso-icon" />
                <span className="nos-proceso-item-txt">Idear la propuesta</span>
            </div>
            <div className="nos-proceso-item">
                <img src={iconTest} className="nos-proceso-icon" />
                <span className="nos-proceso-item-txt">Testear con usuarios</span>
            </div>
        </div>
        <div className=" nos-proceso-row2">
            <div className="nos-proceso-item">
                <img src={iconObj} className="nos-proceso-icon" />
                <span className="nos-proceso-item-txt">Definir objetivos</span>
            </div>
            <div className="nos-proceso-item">
                <img src={iconPrototip} className="nos-proceso-icon" />
                <span className="nos-proceso-item-txt">Prototipar el producto</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Slide3