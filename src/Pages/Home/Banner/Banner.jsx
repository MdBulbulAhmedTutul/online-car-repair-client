import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import banner1 from '../../../assets/images/homeCarousel/1.jpg';
import banner2 from '../../../assets/images/homeCarousel/2.jpg';
import banner3 from '../../../assets/images/homeCarousel/3.jpg';
import banner4 from '../../../assets/images/homeCarousel/4.jpg';
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide data-history="1" className="relative rounded-xl">
                    <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full rounded-xl" src={banner1} alt="" />

                </SwiperSlide>
                <SwiperSlide data-history="Slide 2" className="relative rounded-xl">
                <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full" src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide data-history="3" className="relative rounded-xl">
                <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full" src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide data-history="Slide 4" className="relative rounded-xl">
                <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full" src={banner4} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;