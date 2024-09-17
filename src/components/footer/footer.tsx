import Link from 'next/link';
import Container from '../container/container';
import styles from './footer.module.scss';

const NavMenu = [
    {
        "title": "Модельный ряд",
        "url": ""
    },
    {
        "title": "Покупка",
        "url": ""
    },
    {
        "title": "Сервис",
        "url": ""
    },
    {
        "title": "О компании",
        "url": ""
    },
    {
        "title": "Документы",
        "url": ""
    },
    {
        "title": "Медиа",
        "url": ""
    }
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container customClassName={styles.container}>
                <Link className={styles.logo} href='/'>
                    <img src="/logo_white.svg" width={131} height={30} alt="Логотип компании AUCMA" />
                </Link>
                
                <nav className={styles.nav}>
                    <div>
                        <h3>Навигация</h3>
                        <ul>
                            {
                                NavMenu.map(({title, url}, index) => (
                                    <li key={index}>
                                        <Link href={url}>{title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3>Контакты</h3>
                        <ul>
                            <li>
                                <Link href="contacts">Контакты</Link>
                            </li>
                            <li>
                                <Link href={''}>Задать вопрос</Link>
                            </li>
                        </ul>
                        <a className={styles.phone} href="tel:+74996676543"><b>+7 (499) 667-65-43</b></a>
                    </div>
                </nav>

                <p className={styles.copyright}>© 2024 AUCMA. All Rights Reserved</p>

                <div className={styles.politics}>
                    <ul>
                        <li>
                            <Link href={'politics'}>Политика конфидинцеальности</Link>
                        </li>
                        <li>
                            <Link href={''}>Карта сайта</Link>
                        </li>
                    </ul>
                </div>

                <p className={styles.publicInfo}>
                    Вся представленная на сайте информация носит информационный характер и не является публичной афертой,<br /> определяемой положениями ст. 437 (2) ГК РФ. 
                    Опубликованная на данном сайте информация может быть <br/> изменена в любое время без предварительного уведомления.</p>            
            </Container>
        </footer>
    )
}

export default Footer;