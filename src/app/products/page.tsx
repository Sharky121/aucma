import Container from "@/components/container/container";
import Heading from "@/components/heading/heading";
import styles from "../styles/sections/products/products.module.scss";
import Image from "next/image";
import Button from "@/components/button/button";
import Link from "next/link";
import { Products } from "./data";

export default async function Page() {

    return (
        <section className={styles.products}>
            <Heading isDanger note='в наличии 20 шт.'>Модельный ряд</Heading>
            <Container>
                <ul className={styles.productsList}>
                    {
                        Products.map(({title, descriptions, slug}, index) => (
                            <li key={index} className={styles.productsItem}>
                                <div className={styles.productsItemDiscount}>
                                    Скидка <strong>500 000 &#8381;*</strong> на модельный ряд полуприцепов 2024 года!
                                </div>

                                <div className={styles.productsImg}>
                                    <Link href={`/products/${slug}`}>
                                        <Image src={`/product_${index + 1}.png`} fill alt={title} unoptimized/>
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

                                <p className={styles.productsItemNote}>*подробности уточняйте по телефону, электронной почте или заказывайте звонок, мы обязательно с Вами свяжемся!</p>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </section>
    )
}
