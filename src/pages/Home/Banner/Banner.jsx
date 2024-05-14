import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/XYfvy4V/hotel3.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-5xl font-bold">Elevate Your Experience</h1>
                                    <p className="mb-5">Experience luxury like never before. Book now for unforgettable stays, where every detail is designed to create lasting memories. </p>
                                    <button className="btn btn-primary bg-yellow-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hCtrznt/hotel4.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-5xl font-bold">Elevate Your Experience</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary bg-yellow-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/254jBMr/hotel1.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-5xl font-bold">Elevate Your Experience</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary bg-yellow-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default Banner