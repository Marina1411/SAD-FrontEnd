import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from "./Nav";

function Gallery(){
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      initialSlide: 0,

    };

    const [gallery, setGallery] = useState([]);
    



    const getGallery = async () => {
        const response = await fetch("https://signatureauto-backend.herokuapp.com/gallery");
        const FinalData = await response.json();
        setGallery(FinalData)
    }



    useEffect(() => {
        getGallery();
    }, [])


    return (
        
        <div className='background-1'>
            <Nav/>
             <div className="title">GALLERY</div>
            <div className='App'>
            <Slider {...settings}>
                {gallery.map((item)=> (
                    <div className='container-gallery'>
                        <div className='card_item'>
                        <div className='card_inner'>
                            <div className='row'>
                                <div className='col'>
                            <img src={item.before_img} className="serviceimg-gallery" alt=""/>
                            <div className='gallery-txt'>Before</div>
                            </div>
                            <div className='col'>
                            <img src={item.after_img} className="serviceimg-gallery" alt=""/>
                            <div className='gallery-txt'>After</div>
                            </div>
                            </div>
                            <h1 className="name-gallery mt-3">{item.service_name_en}</h1>
                                        
                        </div>
                        </div>
                    </div>
                ))}
                </Slider>
        </div>
        </div>
    

    );
    

}
export default Gallery;