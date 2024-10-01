import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import style from "./style.module.scss";
import Portal from '../portal/portal';

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

interface MobileNav {
    onClose: () => void;
    mobileRef: React.RefObject<HTMLDivElement>
}

const MobileNav = ({onClose, mobileRef}: MobileNav) => {
    return (
        <Portal>
            <div className={style.mobileNavOverlay}></div>
            <div className={style.mobileNav} ref={mobileRef}>
                <div className={style.mobileNavWrapper}>
                    <div className={style.mobileNavHeader}>
                        <Image className={style.mobileNavLogo} src={'/logo.svg'} width={140} height={32} alt="Лого Aucma"/>
                        <button className={style.mobileNavClose} onClick={onClose}>
                            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false">
                                <use xlinkHref="#ico-cross" x="0" y="0"></use>
                            </svg>
                        </button>
                    </div>

                    <div className={style.mobileNavBody}>
                        <ul className={style.mobileNavList}>
                            {
                                NavMenu.map(({url, title}, index) => (
                                    <li key={index} className={style.mobileNavItem}>
                                        <Link className={style.mobileNavLink} href={`/${url}`}>{title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={style.mobileNavFooter}>
                        <a className={style.mobileNavPhone} href="tel:+74996776543">
                            <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" focusable="false">
                                <use xlinkHref="#ico-phone" x="0" y="0"></use>
                            </svg>
                            <span>+7 (499) 677-65-43</span>
                        </a>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default MobileNav;