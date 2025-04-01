import { useRef, useState } from "react"
// import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

 import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules'
const BannerCard = () => {
  return (
    <div className="banner">
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1637602267i/58891551.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1652105350i/59575939.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639230960i/58231065.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="hhttps://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649228846i/59366244.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg" alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard

