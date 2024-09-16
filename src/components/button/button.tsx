import styles from './button.module.scss';

interface IButton {
    text: string;
    customClass?: string;
    isButton?: boolean;
    url?: string;
    type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({text, isButton, customClass,  url, type}: IButton) => {
    return (
        <>
            {
                isButton ? (
                    <button className={`${styles.btn} ${customClass ? customClass : ''}`} type={type}>
                        <span className={styles.btn__text}>{text}</span>
                        <svg className={styles.btn__icon} viewBox="0 0 22 22" width="16" height="16" aria-hidden="true" focusable="false">
                            <use xlinkHref="#ico-arrow" x="0" y="0"></use>
                        </svg>
                    </button>
                ) : (
                    <a className={`${styles.btn} ${customClass ? customClass : ''}`} href={url}>
                        <span className={styles.btn__text}>{text}</span>
                        <svg className={styles.btn__icon} viewBox="0 0 22 22" width="16" height="16" aria-hidden="true" focusable="false">
                            <use xlinkHref="#ico-arrow" x="0" y="0"></use>
                        </svg>
                    </a>
                )
            } 
        </>
    )
}

export default Button;