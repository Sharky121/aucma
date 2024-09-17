import Image from "next/image";
import Heading from "@/components/heading/heading";
import mediaStyles from "../styles/sections/media/media.module.scss";
import newsStyles from "../styles/sections/news/news.module.scss";
import Container from "@/components/container/container";
import Link from "next/link";

const News = [
    {
        "id": 1,
        "date": "25.07.2024",
        "title": "Полуприцепы AUCMA получили полностью оцинкованную раму",
        "desc": "Специалистами компании AUCMA была разработана и внедрена в производство полностью оцинкованная рама. Метод: горячие цинкование при температуре 400 °С."
    },
    {
        "id": 2,
        "date": "25.07.2024",
        "title": "Достигнуто соглашение с компанией Carrier о гарантии на ХОУ в России",
        "desc": "ООО АКМА РУС заключило договор поставки холодильного оборудования компании Carrier с гарантией на обслуживание. Покупая полуприцеп AUCMA клиенты могут быть спокойны, что гарантийное обсаживание на иностранное  оборудование сохранится."
    },
    {
        "id": 3,
        "date": "25.07.2024",
        "title": "Проблемы с платежами в Китай решены",
        "desc": "Ситуация с расчетами между двумя странами стабилизировалась после поездки президента Владимира Путина в Китай: с Россией стали напрямую работать региональные банки КНР, и возобновил прием платежей один из крупных игроков - Bank of China."
    },
    {
        "id": 4,
        "date": "25.07.2024",
        "title": "Компания AUCMA заключило партнерское соглашение с компанией FAW TRUCKS",
        "desc": "В настоящее время была разработана партнерская программа c FAW TRUCKS, которая позволяет приобрести сцепку (тягач + полуприцеп) по уникальной цене."
    },
    {
        "id": 5,
        "date": "25.07.2024",
        "title": "Испытания Полуприцепа AUCMA подтвердили европейское качество",
        "desc": "Полуприцеп AUCMA завершил испытания по подтверждению качества продукции. По результатам было установлено, что качество кузова не уступает ведущим брендам KRONE SCHMITZ."
    },
    {
        "id": 6,
        "date": "25.07.2024",
        "title": "Легкость в движении, надежность в пути!",
        "desc": "История создания официального слогана компании. Сложности внедрения и административные барьеры."
    }
];

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
                <Container customClassName={newsStyles.newsContainer}>
                    <ul className={newsStyles.newsList}>
                        {
                            News.map(({id, title, date, desc}) => (
                                <li key={id} className={newsStyles.newsItem}>
                                    <h3 className={newsStyles.newsTitle}>{title}</h3>
                                    <time className={newsStyles.newsDate} dateTime="2015-11-18">{date}</time>
                                    <p className={newsStyles.newsDesc}>{desc}</p>
                                    <Link className={newsStyles.newsMore} href={""}>
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