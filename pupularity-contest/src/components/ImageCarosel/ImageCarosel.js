import React, {useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'



function ImageCarosel({data}){
    const [ pups ] = data;
   
    
    return (
        <div className="caroselContainer">
            <Swiper className="Carosel"
                spaceBetween={50}

                slidesPerView={1}
                onSlideChange={()=> console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    pups.map((pup)=>(
                        <SwiperSlide className="PupCard" key={pup.img}>
                            <img src={pup.img} alt={pup.bio}/>
                        </SwiperSlide>

                    ))
                }
                ..
            </Swiper>
        </div>
    )
}

export default ImageCarosel;