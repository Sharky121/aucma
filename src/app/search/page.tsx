import Heading from "@/components/heading/heading";
import Container from "@/components/container/container";
import SearchList from "@/components/search-list/search-list";

import styles from "./style.module.scss";
import { Suspense } from "react";
import Loading from "@/components/loading/loading";

export default async function Page() {

    return (
        <>
            <section className={styles.search}>
                <Heading isDanger>Результаты поиска</Heading>
                <Container>
                    <Suspense fallback={<Loading />}>
                        <SearchList />
                    </Suspense>
                </Container>
            </section>
        </>
    )
}