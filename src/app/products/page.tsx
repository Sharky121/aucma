import Container from "@/components/container/container";
import Heading from "@/components/heading/heading";
import styles from "../styles/sections/products/products.module.scss";
import Image from "next/image";
import Button from "@/components/button/button";

const Products = [
    {
        "title": "Полуприцеп-рефрижератор",
        "descriptions": [
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
                "title": "Габаритные размеры без ХОУ (ДхШхВ, мм)",
                "value": "13 640 * 2 600 * 3 980"
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
    },
    {
        "title": "Изотермический полуприцеп",
        "descriptions": [
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
                "title": "Габаритные размеры без ХОУ (ДхШхВ, мм)",
                "value": "13 640 * 2 600 * 3 980"
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
];


export default async function Page() {

    return (
        <section className={styles.products}>
            <Heading color="danger">Модельный ряд</Heading>
            <Container>
                <ul className={styles.productsList}>
                    {
                        Products.map(({title, descriptions}, index) => (
                            <li key={index} className={styles.productsItem}>
                                <div className={styles.productsImg}>
                                    <Image src={`/product_${index + 1}.png`} fill alt="" />
                                </div>
                                <h3 className={styles.productsTitle}>{title}</h3>

                                <table className={styles.productsTable}>
                                    {
                                        descriptions.map(({title, value}, index) => (
                                            <tr key={index} className={styles.productsTr}>
                                                <td className={styles.productsTd}>{title}</td>
                                                <td className={styles.productsTd}><b>{value}</b></td>
                                            </tr>
                                        ))
                                    }
                                </table>

                                <Button text="Подробнее" />
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}
