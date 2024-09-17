import Heading from "@/components/heading/heading";
import styles from "../styles/sections/documents/documents.module.scss";

export default async function Page() {
    return (
        <>
            <section className={styles.documents}>
                <Heading isDanger>Документы</Heading>
            </section>
        </>
    )
}