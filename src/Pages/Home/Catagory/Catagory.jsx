
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../Images/assets/home/slide1.jpg';
import slide2 from '../../../Images/assets/home/slide2.jpg';
import slide3 from '../../../Images/assets/home/slide3.jpg';
import slide4 from '../../../Images/assets/home/slide4.jpg';
import slide5 from '../../../Images/assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Catagory = () => {
    return (
        <>
            <section>
                <section className='text-center m-4'>
                    <SectionTitle
                    heading={'ORDER ONLINE'}
                    subHeding={'__Form 11.00 AM to 10.00 PM__'}
                    ></SectionTitle>
                </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Fizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Fizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='text-4xl uppercase text-center text-white -mt-14'>Salad</h1>
                </SwiperSlide>







            </Swiper>
            </section>
        </>
    );
};

export default Catagory;