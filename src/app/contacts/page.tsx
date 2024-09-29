import Heading from "@/components/heading/heading";
import Container from "@/components/container/container";
import Button from "@/components/button/button";

import styles from "../styles/sections/contacts/contacts.module.scss";

export default async function Page() {
    return (
        <section className={styles.contacts}>
            <Heading isDanger>Контакты</Heading>
            <Container>
                <div className={styles.contactsWrapper}>
                    <p className={styles.contactsText}>Мы всегда готовы ответить на все ваши вопросы по нашим продуктам и услугам. Отправьте нам свой запрос через форму обратной связи или позвоните по указанному телефону.</p>
                    <p className={styles.contactsText}>Полное наименование предприятия  Общество с ограниченной ответственностью «АКМА РУС». Сокращенное наименование предприятия ООО «АКМА РУС»</p>

                    <dl>
                        <div>
                            <dt>Телефон</dt>
                            <dd>+7 (499) 677-65-43</dd>
                        </div>
                        <div>
                            <dt>Электронная почта</dt>
                            <dd>info@aucma-rus.ru</dd>
                        </div>
                        <div>
                            <dt>Юридический адрес</dt>
                            <dd>142181, Московская обл, г.о. Подольск, д. Коледино, тер. Индустриальный Парк Коледино, 30А</dd>
                        </div>
                        <div>
                            <dt>Фактический адрес</dt>
                            <dd>117246, г. Москва, Научный проезд, 8с1, офис 413</dd>
                        </div>
                        <div>
                            <dt>ИНН</dt>
                            <dd>5074087157</dd>
                        </div>
                        <div>
                            <dt>КПП</dt>
                            <dd>507401001</dd>
                        </div>
                        <div>
                            <dt>ОГРН</dt>
                            <dd>1245000030318</dd>
                        </div>
                        <div>
                            <dt>ОКПО</dt>
                            <dd>48042640</dd>
                        </div>
                    </dl>

                    <ul>
                        <li>
                            <Button text="Заказать звонок"/>
                        </li>
                        <li>
                            <Button text="Стать партнером"/>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}