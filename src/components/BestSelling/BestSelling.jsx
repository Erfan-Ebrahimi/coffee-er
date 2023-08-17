import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";


// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';


import ProductBox from "../ProductBox/ProductBox";

const BestSelling = () => {

    return (
        <section className="mb-9 md:mb-20">
            <div className="flex justify-between items-end mb-5 md:mb-12">
                <div>
                    <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 dark:text-white">محصولات پرفروش</h2>
                    <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">پیشنهاد قهوه خورها  . . . </span>
                </div>
                <div className="relative transition-colors duration-300 mb-5 md:mb-3 pl-28 md:pl-40">
                    <div className="swiper-button-prev" >
                        <ChevronLeftIcon className="w-5 h-5 fill-zinc-600 dark:fill-white" />
                    </div>
                    <div className="swiper-button-next" >
                        <ChevronRightIcon className="w-5 h-5 fill-zinc-600 dark:fill-white" />
                    </div>
                </div>
            </div>

            <Swiper
                className="mySwiper"
                modules={[Navigation, Autoplay]}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    330: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 16
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                <SwiperSlide>
                    <ProductBox img='1' title='قهوه تازه ترکیبی دارک کارامل 250 گرمی' price={175000} score={4} off={20} count={150} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='2' title='قهوه تازه ترکیبی سوپرکرما 250 گرمی' price={152000} score={3} off={0} count={45} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='3' title='قهوه اتیوپی یرگاچف تازه برشت مدیوم 250 گرمی' price={145000} score={5} off={10} count={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='4' title='قهوه ربوستا کامرون تازه برشت دارک مدیوم 250 گرمی' price={130000} score={4} off={15} count={10} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='5' title='قهوه برزیل سانتوس سرادو تازه برشت مدیوم 500 گرمی' price={210000} score={2} off={0} count={15} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='6' title='قهوه ربوستا پارچمنت تازه برشت مدیوم 500 گرمی' price={230000} score={5} off={15} count={78} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='7' title='قهوه ترکیبی تازه سوپر کافئین 500 گرمی' price={258000} score={4} off={25} count={50} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductBox img='8' title='قهوه تازه ترکیبی فول دارک 500 گرمی' price={280000} score={5} off={5} count={45} />
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default BestSelling;