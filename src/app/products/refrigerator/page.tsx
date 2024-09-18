import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Container from "@/components/container/container";
import Heading from "@/components/heading/heading";
import Button from "@/components/button/button";
import style from "../../styles/sections/product/product.module.scss";
import Gallery from "@/components/gallery/gallery";

const Product = {
    "title": "Полуприцеп-рефрижератор",
    "slug": "refrigerator",
    "descriptions": [
        {
            "title": "Модель",
            "value": "AKM9402XLC"
        },
        {
            "title": "Количество осей",
            "value": "3"
        },
        {
            "title": "Категория ТС",
            "value": "04"
        },
        {
            "title": "Габаритные размеры с ХОУ (ДхШхВ, мм)",
            "value": "14 070 * 2 600 * 3 980"
        },
        {
            "title": "Внутренние размеры (ДхШхВ, мм)",
            "value": "13 400 * 2 460 * 2 600 "
        },
        {
            "title": "Внутренний объем",
            "value": "86 м³"
        },
        {
            "title": "Высота ССУ тягача без нагрузки (мм)",
            "value": "1 150"
        },
        {
            "title": "Межосевое расстояние колес (мм)",
            "value": "1 310"
        },
        {
            "title": "Масса полуприцепа (кг):",
            "value": "8 140 (с ХОУ и баком)"
        },
        {
            "title": "Масса перевозимого груза (кг)",
            "value": "30 860"
        },
        {
            "title": "Полная масса полуприцепа (кг)",
            "value": "39 000"
        }
    ]
}

export default async function Page() {
    return (
        <>
            <section className={style.productNavigation}>
                <Heading isDanger>Полуприцепы AUCMA</Heading>
                <div className={style.productNavigationWrapper}>
                    <Container>
                        <ul>
                            <li>                   
                                <Link href="#gallery">Фотогалерея</Link>
                            </li>
                            <li>
                                <Link href="#specifications">Технические характеристики</Link>
                            </li>
                            <li>
                                <Link href="#description">Описание</Link>
                            </li>
                        </ul>
                    </Container>
                </div>

                <div className={style.productGallery} id="gallery">
                    <Gallery />
                </div>
            </section>

            <section className={style.productSpecifications} id="specifications">
                <Heading>Технические характеристики</Heading>
                <Container>
                    <table>
                        <tbody>
                        {
                            Product.descriptions.map(({title, value}, index) => (
                                <tr key={index}>
                                    <td>{title}</td>
                                    <td>{value}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </Container>
            </section>

            <section className={style.productDescription} id="description">
                <Heading>Описание</Heading>
                <Container>
                    <h3>Рама:</h3>
                    <p>Оцинкованная, усиленная стальная конструкция из продольных лонжеронов и поперечных балок, изготовленных из стали повышенной прочности. Конструкция рамы разработана инженерами завода AUCMA с учетом особенностей эксплуатации на территории РФ, что позволило снизить массу
                        полуприцепа без потери прочности и жесткости рамы.
                    </p>

                    <div className={style.productDescriptionBlock}>
                        <div className={style.productDescriptionImg}>
                            <Image src={'/product_1.jpg'} fill alt="Оси, подвеска и шины"/>
                        </div>
                        <div className={style.productDescriptionContent}>
                            <h3>Оси, подвеска и шины:</h3>
                            <ul>
                                <li>Усиленные осевые агрегаты дискового типа, фирмы «SAF Holland»: серия «Module» – является проверенным решением для российских дорог.</li>
                                <li>Пневматическая подвеска всех осей.</li>
                                <li>Подъемная 1-я ось с функцией автоматического опускания при нагрузке.</li>
                                <li>Шины 385/65 R22,5 - 7 штук (6+1), марки «DOUBLE COIN» (КНР).</li>
                                <li>Стальные диски 11,75 R 22.5/10*335 ET120 D.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.productDescriptionBlock}>
                        <div className={style.productDescriptionContent}>
                            <h3>Опорное устройство:</h3>
                            <ul>
                                <li>Опорное устройство компании «JOST».</li>
                                <li>Допустимая нагрузка 24 000 кг (2х12 000 кг).</li>
                                <li>Двухскоростной режим.</li>
                            </ul>
                        </div>
                        <div className={style.productDescriptionImg}>
                            <Image src={'/product_2.jpg'} fill alt="Опорное устройство"/>
                        </div>
                    </div>

                    <h3>Тормозная система:</h3>
                    <p>Электронная тормозная система WABCO, двухконтурная, ТEBS Е, 4S/2M с системой устойчивости к опрокидыванию RSS, с функцией ABS.
                    Электропитание ЕBS согласно европейскому стандарту ISО 7638 + CАN.
                    </p>
                    
                    <div className={style.productDescriptionBlock}>
                        <div className={style.productDescriptionImg}>
                            <Image src={'/product_3.jpg'} fill alt="Электрическое оборудованиеs"/>
                        </div>
                        <div className={style.productDescriptionContent}>
                            <h3>Электрическое оборудование:</h3>
                            <p>Электрическая система напряжением 24В, передний разъем имеет одну 7-жильную розетку (ISO 1185) и одну 15-жильную розетку (ISO 12098) с одной 7-жильной основной схемой (ISO1185)</p>
                        </div>
                    </div>
                    
                    <div className={style.productDescriptionBlock}>
                        <div className={style.productDescriptionContent}>
                            <h3>Холодильная установка:</h3>
                            <ul>
                                <li>Агрегат Carrier Vector 1550 с официальной гарантией производителя не менее 15 месяцев.</li>
                                <li>Высокая точность поддержания заданной температуры: (+/-0,3°C).</li>
                                <li>Технология E-drive, которая обеспечивает низкое потребление топлива, за счет чего достигается оптимальная по сравнению с конкурентами стоимость эксплуатации.</li>
                                <li>Специальный режим охлаждения для особо чувствительных продуктов (цветы, овощи и др.) позволит избежать верхнего подмерзания продукции.</li>
                            </ul>

                            <h3>Дополнительное оборудование:</h3>
                            <p>- Полуприцеп «Aucma» оснащён современной системой удаленного мониторинга «iQFreeze»/«ThermoFleet» с датчиками температуры, открытия дверей, нагрузки на ось и навигацией. Данная система позволяет отслеживать информацию о прицепе в режиме реального времени.</p>
                        </div>
                        <div className={style.productDescriptionImg}>
                            <Image src={'/product_4.jpg'} fill alt="Холодильная установка"/>
                        </div>
                    </div>

                    <div className={style.productDescriptionBlock}>
                        <div className={style.productDescriptionImg}>
                            <Image src={'/product_5.jpg'} fill alt="Кузов"/>
                        </div>
                        <div className={style.productDescriptionContent}>
                            <h3>Кузов:</h3>
                            <p>Конструкция кузова выполнена по итальянской технологии компании «LAMBERET», которая была доработана с учетом климатических условий России. При создании кузова использована бескаркасная конструкция, состоящая из многослойных композитных плит, внешняя сторона из пищевого стекловолокна, внутренний наполнитель из полиуретановой изоляционной пены (материала).</p>
                            <p>Толщина передней стенки, крыши, боковых стенок и задней стенки составляет 70 мм, а толщина пола - 90 мм. </p>
                            <p>Толщина стенок кузова была определена на основе тщательных расчетов по теплоизоляции, устойчивости к механическим воздействиям, климатическим условиям и сроку эксплуатации. Эти расчеты были выполнены командой экспертов, обладающих обширными знаниями и опытом в области проектирования и производства холодильного оборудования.</p>
                            <p>Материал напольного покрытия – нержавеющая сталь с противоскользящим рельефом.</p>
                            <p>Анодированный плинтус 300 мм по периметру кузова</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={style.productOrder}>
                <Heading>Оформить заказ</Heading>
                <Container>
                    <ul>
                        <li>
                            <p>Заполните форму заказа и наши менеджеры обязательно свяжутся с вами:</p>
                            <Button customClass={style.productOrderButton} text="Отправить запрос"/>
                        </li>
                        <li>
                            <p>Телефон для заказа: <br /> <b>+7 (499) 677 65 43</b>. Звоните, или закажите обратный звонок</p>
                            <Button customClass={style.productOrderButton} text="Обратный звонок"/>
                        </li>
                        <li>
                            <p>Воспользуйтесь нашими финансовыми инструментами получите беспроцентный кредит:</p>
                            <Button customClass={style.productOrderButton} text="Лизинг" url="buy"/>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}
