import Image from "next/image";
import Link from "next/link";
import Heading from '@/components/heading/heading';
import Container from '@/components/container/container';
import ButtonOffer from "@/components/button/button-offer";
import Map from "@/components/map/map";

import styles from '../styles/sections/buy/buy.module.scss';
import stylesLeasing from '../styles/sections/leasing/leasing.module.scss';
import stylesDealer from '../styles/sections/dealers-map/dealers-map.module.scss';

export default async function Page() {
    return (
        <>
            <section className={styles.buy}>
                <Heading isDanger>Покупка</Heading>
                <Container>
                    <div className={styles.buyCard}>
                        <h3 className={styles.buyCardTitle}>Получите коммерческое предложение</h3>
                        <p className={styles.buyCardSubTitle}>Оставьте адрес электронной почты, и наш <br /> менеджер сразу же вышлет вам коммерческое <br /> предложение.</p>
                        <ButtonOffer title="Получить КП"/>
                    </div>
                </Container>
            </section>

            <section className={stylesDealer.dealersMap}>
                <Heading>Дилеры</Heading>
                <Container>
                    <Map />
                </Container>
            </section>

            <section className={stylesLeasing.leasing}>
                <Heading isDanger>Лизинг</Heading>

                <Container>
                    <p className={stylesLeasing.leasingText}>Мы сотрудничаем с большинством лизинговых компаний представленных <br /> на рынке РФ, что позволяет нашим клиентам находить самые выгодные <br /> предложения максимально быстро.</p>
                    <ul className={stylesLeasing.leasingList}>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://www.carcade.com" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz1.png" width={190} height={83} alt="Лизинг автомобилей от компании CARCADE"></Image>
                            </Link>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://www.resoleasing.com/" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz2.png" width={190} height={83} alt="РЕСО лизинг"></Image>
                            </Link>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://www.vtb-leasing.ru/" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz3.png" width={190} height={83} alt="ВТБ лизинг"></Image>
                            </Link>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://sovcombank-leasing.ru/" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz4.png" width={190} height={83} alt="СОВКОМ банк лизинг"></Image>
                            </Link>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://alfaleasing.ru" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz5.png" width={190} height={83} alt="Альфа-банк лизинг"></Image>
                            </Link>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://gpbl.ru" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz6.png" width={190} height={96} alt="Газпром лизинг"></Image>
                            </Link>
                        </li>
                        <li className={stylesLeasing.leasingItem}>
                            <Link href="https://europlan.ru/" target="_blank" rel="nofollow">
                                <Image src="/leasing/liz7.png" width={190} height={96} alt="Европром лизинг"></Image>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}