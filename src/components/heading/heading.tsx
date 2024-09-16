import styles from './heading.module.scss';

interface IHeading {
    children: string | JSX.Element,
    color?: 'danger';
    withLink?: boolean;
    isBack?: boolean;
    url?: string;
}

const Heading = ({children, color, withLink, isBack}: IHeading) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>{children}</h2>
            </div>
        </div>
    )
}

export default Heading;