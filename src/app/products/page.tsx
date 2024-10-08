import Container from "@/components/container/container";
import Heading from "@/components/heading/heading";
import styles from "../styles/sections/products/products.module.scss";
import Image from "next/image";
import Button from "@/components/button/button";
import Link from "next/link";

const Products = [
    {
        "title": "Полуприцеп-рефрижератор",
        "slug": "refrigerator",
        "descriptions": [
            {
                "title": "Количество осей",
                "value": "3"
            },
            {
                "title": "Категория ТС",
                "value": "O4"
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
                "value": "8 200 (с ХОУ и баком)"
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
        "slug": "isothermal",
        "descriptions": [
            {
                "title": "Количество осей",
                "value": "3"
            },
            {
                "title": "Категория ТС",
                "value": "О4"
            },
            {
                "title": "Габаритные размеры с ХОУ (ДхШхВ, мм)",
                "value": "13 740 * 2 600 * 3 980"
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
                "value": "7 400"
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
            <Heading isDanger>Модельный ряд</Heading>
            <Container>
                <ul className={styles.productsList}>
                    {
                        Products.map(({title, descriptions, slug}, index) => (
                            <li key={index} className={styles.productsItem}>
                                <div className={styles.productsImg}>
                                    <Link href={`/products/${slug}`}>
                                        <Image src={`/product_${index + 1}.png`} fill alt={title} />
                                    </Link>
                                </div>
                                <h3 className={styles.productsTitle}>{title}</h3>

                                <table className={styles.productsTable}>
                                    <tbody>
                                        {
                                            descriptions.map(({title, value}, index) => (
                                                <tr key={index} className={styles.productsTr}>
                                                    <td className={styles.productsTd}>{title}</td>
                                                    <td className={styles.productsTd}><b>{value}</b></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                                <Button customClass={styles.productsBtn} text="Подробнее" url={`/products/${slug}`}/>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}
