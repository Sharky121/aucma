import styles from './container.module.scss';

type ChildrenType = {
    children: string | JSX.Element | JSX.Element[],
    customClassName?: string;
}

const Container = ({children, customClassName}: ChildrenType) => {
    return (
        <div className={`${styles.container} ${customClassName ? customClassName : ''}`}>{children}</div>
    )
}

export default Container;