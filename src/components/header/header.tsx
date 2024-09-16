import Link from 'next/link';
import Container from '../container/container';
import styles from './header.module.scss';

const NavMenu = [
    {
        "title": "Специальное предложение",
        "url": "offer"
    },
    {
        "title": "Модельный ряд",
        "url": "products"
    },
    {
        "title": "Покупка",
        "url": "buy"
    },
    {
        "title": "Сервис",
        "url": "service"
    },
    {
        "title": "О компании",
        "url": "about"
    },
    {
        "title": "Документы",
        "url": "documents"
    },
    {
        "title": "Медиа",
        "url": "media"
    }
];

const Header = () => {
    return (
        <header className={styles.header}>
            <Container customClassName={styles.headerContainer}>
                <div className={styles.headerHamburger}></div>
                <a className={styles.headerLogo} href="/">
                    <img src="/logo.svg" width={'127'} height={'30'} alt="" />
                </a>
                <hr className={styles.headerLine}/>
                <div className={styles.headerUtilsMenu}>
                    <ul className={styles.headerUtilsMenu__list}>
                        <li className={styles.headerUtilsMenu__item}>
                            <button>
                                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                                    <use xlinkHref="#ico-search" x="0" y="0"></use>
                                </svg>
                                <span>Поиск</span>
                            </button>
                        </li>
                        <li className={styles.headerUtilsMenu__item}>
                            <a href="/contacts">
                                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                                    <use xlinkHref="#ico-location" x="0" y="0"></use>
                                </svg>
                                <span>Контакты</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a className={styles.headerPhone} href="tel:+74996676543">
                    <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" focusable="false">
                        <use xlinkHref="#ico-phone" x="0" y="0"></use>
                    </svg>
                    <span>+7 (499) 667-65-43</span>
                </a>

                <nav className={styles.headerNav}>
                    <ul className={styles.headerNav__list}>
                        {
                            NavMenu.map(({title, url}, index) => (
                                <li key={index} className={styles.headerNav__item}>
                                    <Link className={styles.headerNav__link} href={url}>{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;