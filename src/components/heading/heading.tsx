import styles from './heading.module.scss';

interface IHeading {
    children: string | JSX.Element,
    isDanger?: boolean;
    withLink?: boolean;
    isBack?: boolean;
    url?: string;
}

const Heading = ({children, withLink, isBack, isDanger}: IHeading) => {

    return (
        <div className={`${styles.wrapper} ${isDanger ? styles.wrapperDanger : ''} `}>
            <div className={styles.container}>
                <h2 className={styles.title}>{children}</h2>
            </div>
        </div>
    )
}

export default Heading;