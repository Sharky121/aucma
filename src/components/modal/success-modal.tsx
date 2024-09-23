'use client';

import Portal from "../portal/portal";
import Image from 'next/image';
import styles from "./modal.module.scss";
import Button from "../button/button";

interface IModal {
    children: string | JSX.Element | JSX.Element[],
    title: string;
    onClose: () => void;
}

const SuccessModal = ({children, title, onClose}: IModal) => {

    return (
        <Portal>
            <div className={styles.modalOverlay}></div>
            <div className={`${styles.modal} ${styles.modalSuccess}`}>
                <div className={styles.modalWrapper}>
                    <button className={styles.modalClose} onClick={onClose}>
                        <svg viewBox="0 0 24 24" width="50" height="50" aria-hidden="true" focusable="false">
                            <use xlinkHref="#ico-cross" x="0" y="0"></use>
                        </svg>
                    </button>
                    <div className={styles.body}>
                        <Image className={styles.modalLogo} src={'/logo.svg'} width={200} height={46} alt="Лого Aucma"/>
                        <h3 className={styles.modalTitle}>{title}</h3>
                        <div className={styles.modalSubTitle}>
                            {children}
                        </div>

                        <Button text="Прекрасно" isButton={true} onClick={onClose}/>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default SuccessModal;