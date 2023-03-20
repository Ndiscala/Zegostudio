import React from 'react';
import { useState } from 'react';
import '../assets/styles/Nosotros.css';
import Slide1 from '../components/Nosotros/Slide1';
import Slide3 from '../components/Nosotros/Slide3';
import Slide2 from '../components/Nosotros/Slide2';
import { IoMdArrowBack } from 'react-icons/io';
import { IoMdArrowForward} from 'react-icons/io';


const Nosotros = () => {

  const [slideIndex, setSlideIndex] = useState(3);

  // const[actualSlide, setActualSlide]= useState(<p>Cargando...</p>);

  const nextSlide=()=>{
    if(slideIndex<3){
      setSlideIndex(slideIndex+1);
    }else{
      setSlideIndex(1);
    }
  };

  const prevSlide=()=>{
    if(slideIndex>1){
      setSlideIndex(slideIndex-1)
    }else{
      setSlideIndex(3)
    }
  }


  return (
    <div className='section' style={{top:'0.5rem'}} >
      <div className="arrows">
        <span onClick={prevSlide}><IoMdArrowBack/> </span>
        <span onClick={nextSlide}><IoMdArrowForward/></span>
      </div>
        {
          slideIndex==1 ?
          <Slide1/>
          :
          slideIndex ==2 ? <Slide2/> : <Slide3/>
        }
    </div>
  )
}

export default Nosotros
