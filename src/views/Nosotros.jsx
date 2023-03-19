import React from 'react';
import '../assets/styles/Nosotros.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/gallery/imagen1.png';
import img2 from '../assets/gallery/imagen2.png';
import img3 from '../assets/gallery/imagen3.png';
import Slide1 from '../components/Nosotros/Slide1';
import Slide3 from '../components/Nosotros/Slide3';
import Slide2 from '../components/Nosotros/Slide2';
const Nosotros = () => {

  return (
    <div className='section' style={{top:'0.2rem'}} >
      <Slide1/>
      <Slide2/>
      <Slide3/>
    </div>
//     <Carousel>
//     <div>
//         <img src={img1} />
//         <p className="legend">Legend 1</p>
//     </div>
//     <div>
//         <img src={img2} />
//         <p className="legend">Legend 2</p>
//     </div>
//     <div>
//         <img src={img3} />
//         <p className="legend">Legend 3</p>
//     </div>
// </Carousel>
  )
}

export default Nosotros
