// import { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/modules/pagination/pagination.min.css'

// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";

import slide_1 from '../../../assets/images/slide/slide_1.png'
import slide_2 from '../../../assets/images/slide/slide_2.png'
import slide_3 from '../../../assets/images/slide/slide_3.png'
import slide_4 from '../../../assets/images/slide/slide_4.png'

import './style.scss'

function Slider() {
    SwiperCore.use([Autoplay])
    return (
        <Swiper
            id="swiper"
            className="swiper container"
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            grabCursor={true}
            spaceBetween={50}
            navigation={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide className="swiper__item">
                <div className="swiper__content">
                    <span className="swiper__span">Patek philippe rose gold men's</span>
                    <h2 className="swiper__type">A luxury Watches</h2>
                    <p className="swiper__title">
                        A completely different watch. This Snoopy-inspired watch
                        is based on the famous Franck Muller Crazy Hours, it has
                        all the unique features of this design.
                    </p>
                </div>
                <div className="swiper__image">
                    <img src={slide_1} alt="slide 1" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__item">
                <div className="swiper__content">
                    <div className="swiper__content">
                    <span className="swiper__span">Patek philippe rose gold men's</span>
                        <h2 className="swiper__type">A luxury Watches</h2>
                        <p className="swiper__title">
                            A completely different watch. This Snoopy-inspired
                            watch is based on the famous Franck Muller Crazy
                            Hours, it has all the unique features of this
                            design.
                        </p>
                    </div>
                </div>
                <div className="swiper__image">
                    <img src={slide_2} alt="slide 2" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__item">
                <div className="swiper__content">
                    <div className="swiper__content">
                    <span className="swiper__span">Patek philippe rose gold men's</span>
                        <h2 className="swiper__type">A luxury Watches</h2>
                        <p className="swiper__title">
                            A completely different watch. This Snoopy-inspired
                            watch is based on the famous Franck Muller Crazy
                            Hours, it has all the unique features of this
                            design.
                        </p>
                    </div>
                </div>
                <div className="swiper__image">
                    <img src={slide_3} alt="slide 3" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper__item">
                <div className="swiper__content">
                    <div className="swiper__content">
                        <span>Patek philippe rose gold men's</span>
                        <h2 className="swiper__type">A luxury Watches</h2>
                        <p className="swiper__title">
                            A completely different watch. This Snoopy-inspired
                            watch is based on the famous Franck Muller Crazy
                            Hours, it has all the unique features of this
                            design.
                        </p>
                    </div>
                </div>
                <div className="swiper__image">
                    <img src={slide_4} alt="slide 4" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
