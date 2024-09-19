import { useSwiper } from 'swiper/react';
import styles from './gallery.module.scss';

const GalleryButtonNext = () => {
    const swiper = useSwiper();

    return (
        <div onClick={() => swiper.slideNext()} className={`swiper-button-next ${styles.slideButtonNext}`}>
            <svg viewBox="0 0 26 26" width="26" height="20" aria-hidden="true" focusable="false">
                <use xlinkHref="#ico-arrow-left" x="0" y="0"></use>
            </svg>
        </div>
    )
}

export default GalleryButtonNext;