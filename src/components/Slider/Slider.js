import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, EffectFade} from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css';
import './index.css';

import iPhone from "./images/iPhone-14-pro.png"
import friday from "./images/black-friday.png"
import airpods from "./images/airpods-2.png"
import fold from "./images/galaxy-fold.png"
import React from "react";
import {Link} from "react-router-dom";

const Slider = () => {
    return (
        <div className="sliderHome">
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect
                speed={900}
                slidesPerView={1}
                loop
            >
                <SwiperSlide className="slide-item">
                    <Link to="/phone">
                        <img src={iPhone} alt="iPhone-14-pro"/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <img src={friday} alt="black-friday"/>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <img src={airpods} alt="airpods-2"/>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <img
                        src={fold}
                        alt="galaxy-fold"/>
                </SwiperSlide>
            </Swiper>
            <Swiper>

            </Swiper>
        </div>
    );
};

export default Slider;