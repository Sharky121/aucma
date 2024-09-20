import Heading from "@/components/heading/heading";
import styles from "../styles/sections/offer/offer.module.scss";
import stylesCommercial from "../styles/sections/commercial/commercial.module.scss";
import Container from "@/components/container/container";
import Button from "@/components/button/button";
import ButtonOffer from "@/components/button/button-offer";

export default async function Page() {
    return (
        <>
            <section className={styles.offer}>
                <Heading isDanger>Специальное предложение</Heading>
                <Container customClassName={styles.offerContainer}>
                    <p className={styles.offerText}>ООО «АКМА РУС» является партнером китайской компании «FAW TRUCKS». В целях укрепления и развития дружественных отношений, <br /> наши компании  разработали уникальное предложение для российского рынка по приобретению транспортных средств.</p>
                    
                    <strong className={styles.offerSlogan}>Мы предлагаем</strong>
                    <p className={styles.offerSubSlogan}>купить сцепку (Тягач + Полуприцеп) на выгодных условиях</p>
                
                    <ul className={styles.offerList}>
                        <li className={styles.offerItem}>- льготная ставка по лизинговуму кредитованию;</li>
                        <li className={styles.offerItem}>- эксклюзивная цена на Тягач FAW, Модель: J7 4X2, 2024 года выпуска;</li>
                        <li className={styles.offerItem}>- уникальная цена на Полуприцеп «AUCMA».</li>
                    </ul>
                </Container>
            </section>

            <section className={stylesCommercial.commercial}>
                <Heading>Получите коммерческое предложение</Heading>
                <Container customClassName={stylesCommercial.commercialContainer}>
                    <p className={stylesCommercial.commercialText}>Оставьте адрес электронной почты, и наш менеджер <br />сразу же вышлет вам коммерческое предложение</p>
                    <ButtonOffer title="Получить КП"/>
                </Container>
            </section>
        </>
    )
}