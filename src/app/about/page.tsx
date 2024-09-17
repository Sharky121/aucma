import Image from "next/image";
import Heading from "@/components/heading/heading";
import styles from "../styles/sections/about-company/about-company.module.scss";
import stylesPage from "../styles/sections/about-page/about-page.module.scss";
import stylesHistory from "../styles/sections/about-history/about-history.module.scss";
import stylesCompanies from "../styles/sections/about-companies/about-companies.module.scss";
import Container from "@/components/container/container";
import Button from "@/components/button/button";

export default async function Page() {
    return (
        <div className={stylesPage.aboutPage}>
            <section className={styles.aboutCompany}>
                <Heading isDanger>О компании</Heading>
                <Container customClassName={styles.aboutCompanyContainer}>
                    <h3 className={styles.aboutCompanyTitle}>Компания ООО «АКМА РУС»</h3>
                    <div className={styles.aboutCompanyWrapper}>
                        <p><b>Официальный дистрибьютор на территории Евразийского экономического союза (ЕАЭС) продукции фирмы AUCMA. Создание ООО «АКМА РУС» стало ответом на запрос рынка в надёжной технике для перевозки охлаждённой и замороженной продукции, после ухода с российского рынка европейских производителей рефрижераторных полуприцепов.</b></p>
                        <p>Компания <b>ООО «АКМА РУС»</b> — это команда профессионалов, имеющих огромный опыт в сфере грузоперевозок охлаждённой и замороженной продукции. Обладая глубокими знаниями в области логистики и специфики транспортировки скоропортящихся товаров, компания предлагает своим клиентам продукт, отвечающих самым высоким стандартам качества и безопасности.</p>
                        <p>Одной из главных целей ООО «АКМА РУС» является обеспечение  рынка надежной и эффективной техникой, которая позволит Клиенту своевременно обновить парк. Мы гарантируем качество своей продукции, благодаря использованию современных технологических решений в сочетании с применением надежных комплектующих от ведущих мировых брендов.</p>
                        <p><b>ООО «АКМА РУС»</b> гордится своими партнёрскими отношениями с фирмой <b>«AUCMA»</b>, которая является мировым лидером в производстве холодильного оборудования. Сотрудничество с таким авторитетным брендом – большая ответственность, которая позволяет компании предлагать своим клиентам продукцию самого высокого качества, соответствующую современным требованиям и тенденциям рынка.</p>
                    </div>
                    <Button text="Контакты" url="contacts"/>
                </Container>
            </section>

            <section className={stylesHistory.history}>
                <Heading>История</Heading>
                <Container customClassName={stylesHistory.historyContainer}>
                    <p><b>Компания Aucma Co., Ltd., основанная в 1987 году, сегодня является одним из наиболее надежных и передовых китайских производителей и поставщиков оборудования для интеллектуальных холодильных систем, умной бытовой техники, оборудования для умных домов и коммунальной техники.</b></p>
                    <p>В отделе коммерческого охлаждения компании Aucma работают свыше 280 опытных инженеров. Кроме того, компания располагает собственным инновационным испытательным центром площадью 4500 м², аккредитованным CNAS, и соответствующим требованиям VDE, UL, CSA и CCC.</p>
                    <p>Группа компаний AUCMA International объединяет такие всемирно известные бренды, как ARKTEK, AUMATE, MetaFrige и, конечно же, AUCMA. Продукция под маркой Aucma активно применяется в сферах грузоперевозок, медицины, пищевой промышленности, научных исследований, фармацевтики и животноводства.  Учитывая многолетний опыт в разработке и производстве холодильного оборудования, в 2024году компания приняла решение о расширении ассортимента продукции, поставляемой на российский рынок. В дополнение к уже известному в России медицинскому и коммерческому оборудованию был представлен полуприцеп-рефрижератор.</p>
                </Container>
            </section>

            <section className={stylesCompanies.companies}>
                <Container customClassName={stylesCompanies.companiesContainer}>
                    <ul className={stylesCompanies.companiesList}>
                        <li className={stylesCompanies.companiesItem}>
                            <Image src={'/company_1.png'} width={152} height={63} alt="Лого AUCMA"/>
                        </li>
                        <li className={stylesCompanies.companiesItem}>
                            <Image src={'/company_2.png'} width={167} height={63} alt="Лого AUCMA"/>
                        </li>
                        <li className={stylesCompanies.companiesItem}>
                            <Image src={'/company_3.png'} width={167} height={63} alt="Лого AUCMA"/>
                        </li>
                        <li className={stylesCompanies.companiesItem}>
                            <Image src={'/company_4.png'} width={178} height={64} alt="Лого AUCMA"/>
                        </li>
                    </ul>
                 </Container>
            </section>
        </div>
    )
}