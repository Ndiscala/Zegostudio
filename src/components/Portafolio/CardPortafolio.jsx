import React from 'react'
import '../../assets/styles/Portafolio.css'
import proyecto1 from '../../assets/gallery/proyecto1.png'
import proyecto2 from '../../assets/gallery/proyecto2.png'
import proyecto3 from '../../assets/gallery/proyecto3.png'
import proyecto4 from '../../assets/gallery/proyecto4.png'
import proyecto5 from '../../assets/gallery/proyecto5.png'
import proyecto6 from '../../assets/gallery/proyecto6.png'

const CardPortafolio = () => {

    const Proyectos = [
        {Img:proyecto1, title:'Proyecto 1', text:'asd'},
        {Img:proyecto2, title:'Proyecto 2', text:'asd'},
        {Img:proyecto3, title:'Proyecto 3', text:'asd'},
        {Img:proyecto4, title:'Proyecto 4', text:'asd'},
        {Img:proyecto5, title:'Proyecto 5', text:'dsa'},
        {Img:proyecto6, title:'Proyecto 6', text:'dddsa'}
    ]

  return (
    
        <div className='d-flex justify-content-evenly m-3' style={{}}>
            {
                Proyectos.map(proy =>{
                    return   <div className="card m-3"  key={proy.title}>
                                    <img src={proy.img} className="card-img-top" alt="..."/>
                                        <h5 className="card-title"> {proy.title} </h5>
                                        <p className="card-text"> {proy.text}</p>     
                            </div>
                })
            }
        </div>      
    
  )
}

export default CardPortafolio