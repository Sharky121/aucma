import Heading from "@/components/heading/heading";
import styles from "../styles/sections/media/media.module.scss";

export default async function Page() {
    return (
        <>
            <section className={styles.media}>
                <Heading color="danger">Медиа</Heading>
            </section>
        </>
    )
}