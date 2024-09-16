import Heading from '@/components/heading/heading';
import styles from '../styles/sections/buy/buy.module.scss';
import Container from '@/components/container/container';
import Button from '@/components/button/button';

export default async function Page() {
    return (
        <>
            <section className={styles.buy}>
                <Heading color="danger">Покупка</Heading>
                <Container>
                    <div className={styles.buyCard}>
                        <h3 className={styles.buyCardTitle}>Получите коммерческое предложение</h3>
                        <p className={styles.buyCardSubTitle}>Оставьте адрес электронной почты, и наш <br /> менеджер сразу же вышлет вам коммерческое <br /> предложение.</p>
                        <Button text="Получить КП"/>
                    </div>
                </Container>
            </section>
        </>
    )
}