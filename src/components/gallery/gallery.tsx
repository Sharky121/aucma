'use client'

import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Virtual, Navigation } from 'swiper/modules';

import '../../app/styles/libs/brand-swiper.scss';
import styles from './gallery.module.scss';
import GalleryButtonPrev from './gallery-button-prev';
import GalleryButtonNext from './gallery-button-next';

interface IGallery {
    slides: string[],
    thumbs: string[]
}

const Gallery = ({slides, thumbs}: IGallery) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
                <>
                    <Swiper className={`slider ${styles.slider}`} 
                            slidesPerView={'auto'} 
                            modules={[Thumbs]}
                            loop={true}
                            centeredSlides={true}
                            spaceBetween={0}
                            thumbs={{ swiper: thumbsSwiper }}
                    >
                        {
                            slides.map((image, index) => (
                                <SwiperSlide key={index + uuidv4()} className={styles.slide}>
                                    <Image src={`/gallery/${image}`} fill priority alt="Фото продукта"/>
                                </SwiperSlide>
                            ))
                        }
                        <GalleryButtonPrev />
                        <GalleryButtonNext/>
                    </Swiper>
                    
                    <Swiper className={styles.thumbSlider}
                            slidesPerView={'auto'}
                            modules={[Thumbs]}
                            spaceBetween={10}
                            loop={true}
                            watchSlidesProgress
                            // @ts-ignore
                            onSwiper={setThumbsSwiper} updateOnImagesReady={true} >
                        {
                            thumbs.map((image, index) => (
                                <SwiperSlide key={index + uuidv4()} className={styles.thumbSlide}>
                                    <Image className={styles.thumbSlideImage} src={`/gallery/${image}`} fill alt="Фото продукта"/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>  
                </>
        </>
    )
}

export default Gallery;