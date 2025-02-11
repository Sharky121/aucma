import styles from './heading.module.scss';

interface IHeading {
    children: string | JSX.Element | undefined,
    isDanger?: boolean;
    withLink?: boolean;
    isBack?: boolean;
    url?: string;
    note?: string;
}

const Heading = ({children, note, isDanger}: IHeading) => {

    return (
        <div className={`${styles.wrapper} ${isDanger ? styles.wrapperDanger : ''} `}>
            <div className={styles.container}>
                <h2 className={styles.title}>{children}</h2>
                {
                    note && <span className={styles.note}>({note})</span>
                }
            </div>
        </div>
    )
}

export default Heading;