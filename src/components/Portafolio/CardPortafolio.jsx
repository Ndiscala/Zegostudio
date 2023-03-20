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
        {Img:proyecto1, title:'Web design (2022)', text:'WERLTON'},
        {Img:proyecto2, title:'Branding (2023)', text:'Searchify'},
        {Img:proyecto3, title:'Branding (2022)', text:'Punkt.'},
        {Img:proyecto5, title:'Redes sociales (2023)', text:'Ornskov'},
        {Img:proyecto6, title:'MOON Instagram Stories', text:'Redes sociales (2022)'},
        {Img:proyecto4, title:'Blackroom', text:'Web design (2021)'}
    ]

  return (
    
        <div className='d-flex justify-content-evenly flex-wrap m-3'>
            {
                Proyectos.map(proy =>{
                    return <figure className="figure m-auto Proyectos">
                                <img src={proy.Img} className="figure-img img-fluid rounded" alt="..."/>
                                <p className='title '>{proy.text} </p> 
                                <p className='text '>{proy.title} </p> 
                            </figure>
                    
                    {/* <div className="card m-3 overflow-hidden"  key={proy.title} style={{width:'25rem'}}>
                                    <img src={proy.Img} className="img-fluid " alt="proyectos" />
                                    
                            </div> */}
                            
                                
                            
                            
                            
                })
            }
        </div>      
    
  )
}

export default CardPortafolio