
import { use } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import ReviewsCard from './ReviewsCard';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


export default function Testimonials({ reviewsPromise }) {

    const reviews = use(reviewsPromise);

    return (
        <div className='mt-10 max-w-300 mx-auto px-4 py-10'>
            <div className='text-center'>
                <h2 className='text-4xl text-white text-center font-bold'>Testimonials</h2>
                <p className='my-8 text-gray-300'>Feedback from clients, partners and colleagues who have experienced my professional journey</p>
            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                direction="horizontal"
                coverflowEffect={{
                    rotate: 50,
                    stretch: "50%",
                    depth: 100,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,

                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <ReviewsCard review={review} />
                        </SwiperSlide>
                    ))

                }

            </Swiper>
        </div>
    )
}
