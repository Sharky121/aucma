'use client'

import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Thumbs, Navigation } from "swiper/modules";
import '../../app/styles/libs/brand-swiper.scss';
import { v4 as uuidv4 } from 'uuid';

import styles from './gallery.module.scss';

const Gallery = () => {
    const galleryRef = useRef(null);
    const thumbsRef = useRef(null);
    const [images, setImages] = useState([
        "IMG_6583.jpg",
        "IMG_6591.jpg",
        "IMG_6607.jpg",
        "IMG_6633.jpg",
        "IMG_6646.jpg",
        "IMG_6647.jpg"
    ]);

    useEffect(() => {
        if (thumbsRef.current) {
            new Swiper(thumbsRef.current, {
                slidesPerView: 4,
                navigation: false,
                spaceBetween: 0,
            });
        }

        if (galleryRef.current) {

            new Swiper(galleryRef.current, {
                modules: [Thumbs, Navigation],
                slidesPerView: 1,
                spaceBetween: 0,
                thumbs: {
                    swiper: thumbsRef.current,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    960: {
                        loop: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        spaceBetween: 35
                    },
                    1280: {
                        loop: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        spaceBetween: 60                    
                    }
                }
            });
          };
    }, []);

    return (
        <>
            <div className={`swiper ${styles.slider}`} ref={galleryRef}>
                <div className="swiper-wrapper">
                    {
                        images.map((image, index) => (
                            <div key={index + uuidv4()} className={`swiper-slide ${styles.slide}`}>
                                <Image src={`/gallery/${image}`} fill alt="Фото продукта"/>
                            </div>
                        ))
                    }
                </div>
                <div className={`swiper-button-prev ${styles.slideButtonPrev}`}>
                    <svg viewBox="0 0 26 26" width="26" height="20" aria-hidden="true" focusable="false">
                        <use xlinkHref="#ico-arrow-left" x="0" y="0"></use>
                    </svg>
                </div>
                <div className={`swiper-button-next ${styles.slideButtonNext}`}>
                    <svg viewBox="0 0 26 26" width="26" height="20" aria-hidden="true" focusable="false">
                        <use xlinkHref="#ico-arrow-left" x="0" y="0"></use>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Gallery;