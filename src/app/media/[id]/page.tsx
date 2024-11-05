import Heading from "@/components/heading/heading";
import styles from "./style.module.scss";
import Container from "@/components/container/container";
import News from "@/data/news";

export default async function Page({params}: any) {
    const news = News.find(({id}) => id === parseInt(params.id, 10));
    const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`

    return (
        <>
            <section className={styles.news}>
                <Heading isDanger>{news?.title}</Heading>
                <Container>
                    <div className={styles.newsDesc} dangerouslySetInnerHTML={{__html: news?.desc ?? ''}} />
                </Container>
            </section>
        </>
    )
}