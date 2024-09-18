'use client';

import Portal from "../portal/portal";
import Image from 'next/image';
import styles from "./modal.module.scss";

interface IModal {
    children: string | JSX.Element | JSX.Element[],
    title: string
}

const Modal = ({children, title}: IModal) => {

    return (
        <Portal>
            <div className={styles.modalOverlay}></div>

            <div className={styles.modal}>
                <div className={styles.modalWrapper}>
                    <button className={styles.modalClose}>
                        <svg viewBox="0 0 24 24" width="50" height="50" aria-hidden="true" focusable="false">
                            <use xlinkHref="#ico-cross" x="0" y="0"></use>
                        </svg>
                    </button>
                    <div className={styles.modalHeader}>
                        <Image className={styles.modalLogo} src={'/logo.svg'} width={200} height={46} alt="Лого Aucma"/>
                        <h3 className={styles.modalTitle}>{title}</h3>
                    </div>
                    <div className={styles.body}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal;