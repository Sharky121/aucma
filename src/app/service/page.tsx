import Heading from "@/components/heading/heading";
import styles from "../styles/sections/service/service.module.scss";
import Container from "@/components/container/container";

export default async function Page() {
    return (
        <>
            <section className={styles.service}>
                <Heading color="danger">Сервис</Heading>
                <Container>
                    <div className={styles.serviceWrapper}>
                        <h3 className={styles.serviceTitle}>Наша цель</h3>
                        <p className={styles.serviceText}>Обеспечить надежную и эффективную работу вашего бизнеса. Мы знаем, насколько важно иметь оперативную и качественную сервисную поддержку, поэтому наша компания имеет широкую сеть авторизованных сервисных центров по всей территории Российской Федерации. Благодаря этому наши клиенты всегда могут получить квалифицированную помощь в любом регионе страны.</p>
                        <p className={styles.serviceText}>Авторизованные AUCMA сервисные центры предоставляют полный спектр услуг по ремонту и техническому обслуживанию рефрижераторных полуприцепов. Мы гарантируем высокое качество работ и использование оригинальных запасных частей. Кроме того, наши специалисты всегда готовы дать профессиональную консультацию по эксплуатации и обслуживанию Вашего полуприцепа AUCMA.</p>
                        <p className={styles.serviceText}><b>Мы заботимся о своих клиентах и стремимся предоставить им максимальный комфорт при использовании нашей продукции.</b></p>
                        <p className={styles.serviceText}>Для получения дополнительной информации о нашей дилерской сети и сервисных центрах, пожалуйста, свяжитесь с нами по телефону или электронной почте. Мы будем рады помочь вам!</p>
                    </div>
                </Container>
            </section>
        </>
    )
}