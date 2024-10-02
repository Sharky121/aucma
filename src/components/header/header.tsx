'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Container from '../container/container';
import MobileNav from '../mobile-nav/mobile-nav';
import Search from '../search/search';

import Menu from '@/data/menu-data';

import styles from './header.module.scss';
import Nav from '../nav/nav';

const Header = () => {
    const pathname = usePathname();
    const mobileMenuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsOpen(false);
    }

    const handleOpenMenu = () => {
        setIsOpen(true);
    }

    const handleClickOutside = (evt: { target: any; }) => {
        if (
            mobileMenuRef.current &&
            evt.target instanceof Element &&
            //@ts-ignore
            !mobileMenuRef.current.contains(evt.target)
        ) {
          setIsOpen(false);
        }
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
          document.body.style.overflow = 'hidden'; 
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
          document.body.style.overflow = 'auto'; 
        }
    }, [isOpen]);

    return (
        <>
            <header className={styles.header}>
                <Container customClassName={styles.headerContainer}>
                    <div className={styles.headerHamburger} onClick={handleOpenMenu}></div>
                    <a className={styles.headerLogo} href="/">
                        <img src="/logo.svg" width={'127'} height={'30'} alt="" />
                    </a>
                    <hr className={styles.headerLine}/>
                    <div className={styles.headerUtilsMenu}>
                        <ul className={styles.headerUtilsMenu__list}>
                            <li className={styles.headerUtilsMenu__item}>
                                <Search />
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
                    <a className={styles.headerPhone} href="tel:+74996776543">
                        <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" focusable="false">
                            <use xlinkHref="#ico-phone" x="0" y="0"></use>
                        </svg>
                        <span>+7 (499) 677-65-43</span>
                    </a>

                    <Nav menu={Menu} />
                </Container>
            </header>
            
            {
                isOpen && (
                    <MobileNav mobileRef={mobileMenuRef} onClose={handleCloseMenu}/>
                )
            }
        </>
    )
}

export default Header;