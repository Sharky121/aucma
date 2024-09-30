import Heading from "@/components/heading/heading";
import Container from "@/components/container/container";
import styles from "./style.module.scss";
import pages from "@/data/pages-data";
import Link from "next/link";

export default async function Page() {
    return (
        <>
            <section className={styles.sitemap}>
                <Heading isDanger>Карта сайта</Heading>
                <Container>
                    <ol className={styles.sitemapList}>
                        {
                            pages.map(({title, path}, index) => (
                                <li key={index + title} className={styles.sitemapItem}>
                                    <Link className={styles.sitemapLink} href={path}>{title}</Link>
                                </li>
                            ))
                        }
                    </ol>
                </Container>
            </section>
        </>
    )
}