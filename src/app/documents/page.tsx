import Heading from "@/components/heading/heading";
import styles from "../styles/sections/documents/documents.module.scss";
import Container from "@/components/container/container";
import DocumentList from "@/components/documents-list/documents-list";

export default async function Page() {
    return (
        <>
            <section className={styles.documents}>
                <Heading isDanger>Документы</Heading>
                <Container>
                    <DocumentList />
                </Container>
            </section>
        </>
    )
}