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
        <div className="z-0">
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
                <SwiperSlide data-history="1" className="relative z-0 rounded-xl">
                    <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full rounded-xl" src={banner1} alt="" />
                    <div className='absolute w-full h-full text-white top-36 left-28'>
                        <h2 className='text-3xl font-bold mb-3'>Affordable Price For <br /> Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="bg-[#ff3438] hover:bg-transparent hover:border-2 hover:border-white w-ful px-4 py-2 mt-3 rounded-lg text-white font-semibold">Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-history="1" className="relative z-0 rounded-xl">
                    <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full rounded-xl" src={banner2} alt="" />
                    <div className='absolute w-full h-full text-white top-36 left-28'>
                        <h2 className='text-3xl font-bold mb-3'>Affordable Price For <br /> Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="bg-[#ff3438] hover:bg-transparent hover:border-2 hover:border-white w-ful px-4 py-2 mt-3 rounded-lg text-white font-semibold">Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-history="3" className="relative z-0 rounded-xl">
                    <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full rounded-xl" src={banner3} alt="" />
                    <div className='absolute w-full h-full text-white top-36 left-28'>
                        <h2 className='text-3xl font-bold mb-3'>Affordable Price For <br /> Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="bg-[#ff3438] hover:bg-transparent hover:border-2 hover:border-white w-ful px-4 py-2 mt-3 rounded-lg text-white font-semibold">Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-history="Slide 4" className="relative z-0 rounded-xl">
                    <div className="absolute w-full h-full bg-black opacity-30 rounded-xl"></div>
                    <img className="h-[550px] w-full rounded-xl" src={banner4} alt="" />
                    <div className='absolute w-full h-full text-white top-36 left-28'>
                        <h2 className='text-3xl font-bold mb-3'>Affordable Price For <br /> Car Servicing</h2>
                        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="bg-[#ff3438] hover:bg-transparent hover:border-2 hover:border-white w-ful px-4 py-2 mt-3 rounded-lg text-white font-semibold">Learn More</button>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;