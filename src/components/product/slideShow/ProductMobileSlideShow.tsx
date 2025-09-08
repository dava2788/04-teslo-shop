'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './sliceShow.css';


interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
    return (

        <div className={className}>
            <Swiper pagination={true} modules={[FreeMode, Pagination, Autoplay]} className="mySwiper2"
                autoplay={{
                    delay: 2500
                }}
                style={{
                    width: '100vw',
                    height: '500px'
                }}
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image width={600} height={500} src={`/products/${image}`} alt={title} className="object-fill" />
                        </SwiperSlide>
                    ))

                }
            </Swiper>
        </div>

    )
}
