import Heading from "@/components/heading/heading";
import styles from "../styles/sections/about-company/about-company.module.scss";

export default async function Page() {
    return (
        <>
            <section className={styles.aboutCompany}>
                <Heading color="danger">О компании</Heading>
            </section>
        </>
    )
}