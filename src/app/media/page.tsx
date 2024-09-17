import Image from "next/image";
import Heading from "@/components/heading/heading";
import mediaStyles from "../styles/sections/media/media.module.scss";
import newsStyles from "../styles/sections/news/news.module.scss";
import Container from "@/components/container/container";

export default async function Page() {
    return (
        <>
            <section className={mediaStyles.media}>
                <Heading isDanger>Медиа</Heading>
                <Container customClassName={mediaStyles.mediaContainer}>
                    <h3 className={mediaStyles.mediaTitle}>Видео-обзор на Полуприцеп</h3>
                    <div className={mediaStyles.mediaVideo}>
                        <a href="">
                            <Image src={'/ico-youtube.png'} width={40} height={40} alt="Лого youtube"/>
                        </a>
                    </div>
                    <p className={mediaStyles.mediaText}>Одной из главных целей <b>«АКМА РУС»</b> является обеспечение отечественного рынка надежной и эффективной техникой, которая позволит Клиенту своевременно обновить парк. Мы гарантируем качество своей продукции, благодаря использованию современных технологических решений в сочетании с применением надежных комплектующих от ведущих мировых брендов.</p>
                </Container>
            </section>

            <section className={newsStyles.news}>
                <Heading>Новости</Heading>
            </section>
        </>
    )
}