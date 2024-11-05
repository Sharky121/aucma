import Image from "next/image";
import Heading from "@/components/heading/heading";
import mediaStyles from "../styles/sections/media/media.module.scss";
import newsStyles from "../styles/sections/news/news.module.scss";
import Container from "@/components/container/container";
import Link from "next/link";
import News from "@/data/news";

export default async function Page() {
    const COUNT_TRIM_TEXT = 233;
    
    const trimDesc = (text: string) => {
        return [...text].length > COUNT_TRIM_TEXT 
            ? [...text]
                .splice(0, COUNT_TRIM_TEXT)
                .join('') + '...'
            : text
    }

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
                <Container customClassName={newsStyles.newsContainer}>
                    <ul className={newsStyles.newsList}>
                        {
                            News.splice(0, 6).map(({id, title, date, desc}) => (
                                <li key={id} className={newsStyles.newsItem}>
                                    <h3 className={newsStyles.newsTitle}>{title}</h3>
                                    <time className={newsStyles.newsDate} dateTime="2015-11-18">{date}</time>
                                    <p className={newsStyles.newsDesc} dangerouslySetInnerHTML={{__html: trimDesc(desc) ?? ''}}/>
                                    <Link className={newsStyles.newsMore} href={`/media/${id}`}>
                                        <span>Подробнее</span>
                                        <svg viewBox="0 0 22 22" width="16" height="16" aria-hidden="true" focusable="false">
                                            <use xlinkHref="#ico-arrow" x="0" y="0"></use>
                                        </svg>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </section>
        </>
    )
}