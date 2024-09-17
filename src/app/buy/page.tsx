import Image from "next/image";
import Heading from '@/components/heading/heading';
import styles from '../styles/sections/buy/buy.module.scss';
import stylesLeasing from '../styles/sections/leasing/leasing.module.scss';
import Container from '@/components/container/container';
import Button from '@/components/button/button';

export default async function Page() {
    return (
        <>
            <section className={styles.buy}>
                <Heading isDanger>Покупка</Heading>
                <Container>
                    <div className={styles.buyCard}>
                        <h3 className={styles.buyCardTitle}>Получите коммерческое предложение</h3>
                        <p className={styles.buyCardSubTitle}>Оставьте адрес электронной почты, и наш <br /> менеджер сразу же вышлет вам коммерческое <br /> предложение.</p>
                        <Button text="Получить КП"/>
                    </div>
                </Container>
            </section>

            <section className={stylesLeasing.leasing}>
                <Heading>Лизинг</Heading>
                <Container>
                    <p className={stylesLeasing.leasingText}>Мы сотрудничаем с большинством лизинговых компаний представленных <br /> на рынке РФ, что позволяет нашим клиентам находить самые выгодные <br /> предложения максимально быстро.</p>
                    <ul className={stylesLeasing.leasingList}>
                        <li className={stylesLeasing.leasingItem}>
                            <Image src="/sber_leasing.jpg" width={190} height={96} alt="Сбелизинг"></Image>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Image src="/gazprom_leasing.png" width={190} height={96} alt="Газпром лизинг"></Image>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Image src="/europlan_leasing.png" width={190} height={36} alt="Европлан"></Image>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}