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
    images: string[];
}

const Gallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(true);

    const slides = Array.from({ length: 28 }).map(
        (el, index) => `product_${index + 1}.jpg`
    );

    const thumbsSlides = Array.from({ length: 28 }).map(
        (el, index) => `product_thumbs_${index + 1}.jpg`
    );
    

    return (
        <>
            {imagesLoaded && (
                <>
                    <Swiper className={`slider ${styles.slider}`} 
                            slidesPerView={'auto'} 
                            modules={[Thumbs, Virtual]}
                            loop={true}
                            centeredSlides={true}
                            spaceBetween={0}
                            thumbs={{ swiper: thumbsSwiper }}
                    >
                        {
                            slides.map((image, index) => (
                                <SwiperSlide key={index + uuidv4()} virtualIndex={index} className={styles.slide}>
                                    <Image src={`/gallery/${image}`} fill alt="Фото продукта" placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="/>
                                </SwiperSlide>
                            ))
                        }
                        <GalleryButtonPrev />
                        <GalleryButtonNext/>
                    </Swiper>
                    
                    <Swiper className={styles.thumbSlider}
                            slidesPerView={'auto'}
                            modules={[Thumbs, Virtual]}
                            spaceBetween={10}
                            loop={true}
                            watchSlidesProgress
                            // @ts-ignore
                            onSwiper={setThumbsSwiper} updateOnImagesReady={true} >
                        {
                            thumbsSlides.map((image, index) => (
                                <SwiperSlide key={index + uuidv4()} virtualIndex={index} className={styles.thumbSlide}>
                                    <Image className={styles.thumbSlideImage} src={`/gallery/${image}`} fill alt="Фото продукта"/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>  
                </>
            )}
        </>
    )
}

export default Gallery;