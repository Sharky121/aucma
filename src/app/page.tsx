import Image from "next/image";
import Heading from "@/components/heading/heading";
import Container from "@/components/container/container";
import Button from "@/components/button/button";
import ButtonOffer from "@/components/button/button-offer";

import styles from "./page.module.css";
import stylesFeatures from "./styles/sections/features/features.module.scss";
import stylesAbout from "./styles/sections/about/about.module.scss";
import stylesMain from "./styles/sections/main/main.module.scss";
import Banner from "@/components/banner/banner";
import OfferLink from "@/components/offer-link/offer-link";

const Features = [
  'На выбор клиента: полностью оцинкованная рама или KTL обработка рамы',
  'Собственная масса ТС с ХОУ и баком: 8200',
  'оси «SAF Holland»',
  'ХОУ «Carrier Vector 1550» с гарантией 15 месяцев',
  'Система удаленного мониторинга с датчиками температуры, открывания дверей, нагрузок на оси и навигацией',
  'Подъемная 1-я ось с функцией автоматического опускания при нагрузке',
  'Опорные устройства «JOST»',
  'Тормозная система «WABCO» TEBS E'
]

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <main className={styles.main}>
        {/* Главная секция */}
        <section className={stylesMain.section}>
          <Container customClassName={stylesMain.container}>
            <Banner/>
            <h1 className={stylesMain.title}>Полуприцепы <br/> AUCMA</h1>
            <p className={stylesMain.subtitle}>Легкость в движении <br/> надежность в пути</p>
            <Button text={'Специальное предложение на сцепку'} customClass={stylesMain.btn} url={'/offer'}/>
            <OfferLink />
          </Container>
        </section>

        {/* О полуприцепах */}
        <section className={stylesAbout.about}>
          <Heading isDanger>Полуприцепы AUCMA</Heading>
          <Container customClassName={stylesAbout.container}>
            <Image src="/about.png" width="292" height="240" alt="Полуприцеп AUCMA" unoptimized/>
            <div className={stylesAbout.wrapper}>
              <p><b>Полуприцеп «AUCMA» представляет собой уникальное для рынка грузовых перевозок решение. </b></p>
              <p>Надежная и продуманная конструкция в сочетании с технологиями от ведущих мировых брендов, удовлетворят самые высокие ожидания.</p>
              <p>Конструкция кузова выполнена по итальянской технологии, которая была доработана ведущими специалистами компании «AUCMA» с учетом климатических условий России.</p> 

              <ButtonOffer customClass={stylesAbout.btn} mail="sales"/>
            </div>
          </Container>
        </section>

        {/* Преимущества */}
        <section className={stylesFeatures.features}>
          <Heading isDanger>Наши преимущества</Heading>
          <Container>
            <ul className={stylesFeatures.list}>
              {
                Features.map((item, index) => (
                  <li key={index} className={stylesFeatures.item}>
                    <h3 className={stylesFeatures.itemTitle}>{item}</h3>
                  </li>
                ))
              }
            </ul>
          </Container>
        </section>
    </main>
  );
}
