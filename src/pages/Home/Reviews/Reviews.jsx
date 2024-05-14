import { useEffect, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <section className="container mx-auto mb-20">
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

                    {
                        reviews.map(rev => <SwiperSlide key={rev._id}>
                            <div className="p-8 px-12 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                                <p className="leading-loose text-white">
                                    {rev.comment}
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src={rev?.userImage} alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-white">{rev?.username}</h1>
                                        <span className="text-sm text-blue-200">{rev?.rating} stars</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>
    )
}

export default Reviews