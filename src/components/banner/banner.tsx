
import Link from 'next/link';
import styles from './banner.module.scss';

const Banner = () => {
    return (
        <Link href="/products" className={styles.banner}>
            <p className={styles.bannerText}>Распродажа рефрижераторных полуприцепов 2024 года выпуска!</p>
            <p className={styles.bannerText}>Не упустите шанс обновить автопарк по  <br /> <span className={styles.bannerUnderline}>специальной цене</span> </p>
            <p className={styles.bannerCost}><strong>8 500 000 &#8381;</strong></p>
            <small className={styles.bannerNote}>* Количество ограничено! Цена действительна до конца января 2025 года</small>
        </Link>
    )
}

export default Banner;



