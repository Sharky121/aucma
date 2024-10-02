import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './styles.module.scss';

interface IMenu {
    title: string,
    url: string
}

interface INav {
    menu: IMenu[];
}

const Nav = ({ menu }: INav) => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className={styles.headerNav}>
            <ul className={styles.headerNav__list}>
                {
                    menu.map(({title, url}, index) => (
                        <li key={index} className={styles.headerNav__item}>
                            <Link className={styles.headerNav__link} href={`/${url}`}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav;