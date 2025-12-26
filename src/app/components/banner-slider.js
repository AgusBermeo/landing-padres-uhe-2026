'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BannerSlider() {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src="/padres-1.jpg" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide><img src="/padres-2.jpg" alt="" className="w-full" /></SwiperSlide>
                <SwiperSlide><img src="/padres-3.jpg" alt="" className="w-full" /></SwiperSlide>
            </Swiper>
        </>
    )
}