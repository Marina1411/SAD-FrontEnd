import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion} from 'framer-motion';
import Nav from './Nav';
import {FaPlusCircle} from 'react-icons/fa';

function ServicesList(){


  
  
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const [services, setServices] = useState([]);
    



    const getServices = async () => {
        const response = await fetch("https://signatureauto-backend.herokuapp.com/services");
        const FinalData = await response.json();
        setServices(FinalData)
    }



    useEffect(() => {
        getServices();
    }, [])


    const [isOpen, setIsOpen] = useState(false);
  

    return (
        <div className='background-1'>
          
      <Nav />
             <div className="title">SERVICES</div>
                     <div className="container2">
        <div className="card_item">
            <motion.div  onClick={()=> setIsOpen(!isOpen)} className="card_inner">
            <div className="name"> Price breakdown </div>
            {isOpen && 
                <motion.div className="carditem">
                    <p className="carditem">1. small 2 seater</p>
                    <p className="carditem">2. coupe / 4 door car</p>
                    <p className="carditem">3. 4d sedan / small / med pickup</p>
                    <p className="carditem">4. regular SUV</p>
                    <p className="carditem">5. big SUV / big pickup</p>
                    <p className="carditem">6. small pickup</p>
                </motion.div>
            }
        </motion.div>
        </div>
        </div>
            <div className='App'>
            <Slider {...settings} className="slider">
                {services.map((service,index)=> (
                    <div className='container' key={index}>
                        <div className='card_item'>
                        <motion.div className='card_inner'>
                            <img src={service.image} className="serviceimg" alt=""/>
                            <h1 className="name">{service.service_name_en}</h1>
                            <div className="detail-box">
                            <div className="carditem"><span><button className="iconbtn">1</button></span>${service.p_small_2seater}</div>
                            <div className="carditem"><span><button className="iconbtn">2</button></span>${service.p_coupe}</div>
                            <div className="carditem"><span><button className="iconbtn">3</button></span>${service.p_4d_sedan}</div>
                            <div className="carditem"><span><button className="iconbtn">4</button></span>${service.reg_suv}</div>
                            <div className="carditem"><span><button className="iconbtn">5</button></span>${service.p_big_suv}</div>
                            <div className="carditem"><span><button className="iconbtn">6</button></span>${service.p_small_pickup}</div>
                             </div>
                             <div className='plusservice'>ADD <FaPlusCircle/></div>

                                        
                        </motion.div>
                        </div>
                    </div>
                ))}
                </Slider>
        </div>
        </div>
    

    );
    

}
export default ServicesList;