'use client';

import styles from "./documents-list.module.scss";
import DocumentItem from "./document-item";

const documents = [
    {
        "title": "Дилер без СТО",
        "slug": "dealer_without_cto",
        "files": [
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_zch"
            },
            {
                "title": "Шаблон спецификации",
                "url": "shablon_specifikacii"
            },
            {
                "title": "Договор шаблон с дилером без СТО",
                "url": "dogovor_shablon_s_dilerom_bez_sto"
            }
        ]
    },
    {
        "title": "Дилер с СТО",
        "slug": "dealer_with_cto",
        "files": [
            {
                "title": "Гарантийное соглашение",
                "url": "garantijnoe_soglashenie"
            },
            {
                "title": "Дилерский договор с СТО",
                "url": "dilerskij_dogovor_with_sto"
            },
            {
                "title": "Договор на ТО и ремонт ТС",
                "url": "dogovor_na_to_i_remont_ts"
            },
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_zh"
            },
            {
                "title": "Приложение 1 (ПСО)",
                "url": "prilozhenie_1_pso"
            },
            {
                "title": "Приложение 2 (Сроки гарантия)",
                "url": "prilozhenie_2_sroki_i_garantiya"
            },
            {
                "title": "Приложение 3 (Компенсация затрат)",
                "url": "prilozhenie_3_kompensaciya_zatrat"
            },
            {
                "title": "Шаблон спецификации",
                "url": "shablon_specifikacii"
            }
        ]
    },
    {
        "title": "Каталоги и инструкции",
        "slug": "catalog",
        "files": [
            {
                "title": "Инструкция по безопасности",
                "url": "instrukciya_po_bezopasnosti"
            },
            {
                "title": "Каталог запчастей",
                "url": "katalog_zapchastej"
            },
            {
                "title": "Руководство по эксплуатации VECTOR 1550_RUS",
                "url": "rukovodstvo_po_ekspluatacii_vector_1550_rus"
            },
            {
                "title": "Руководство по эксплуатации",
                "url": "rukovodstvo_po_ekspluatacii"
            },
            {
                "title": "Руководство SAF",
                "url": "rukovodstvo_saf"
            },
            {
                "title": "Руководство WABCO TEBS E",
                "url": "rukovodstvo_wabco_tebs_e"
            },
        ]
    },
    {
        "title": "Покупателю",
        "slug": "buyer",
        "files": [
            {
                "title": "Дкп лизинг",
                "url": "dkp_leasing"
            },
            {
                "title": "Дкп прямой",
                "url": "dkp_pryamoj"
            },
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_zch"
            },
            {
                "title": "Договор поставки ТС",
                "url": "dogovor_postavki_ts"
            }
        ]
    },
    {
        "title": "СТО",
        "slug": "cto",
        "files": [
            {
                "title": "Договор на ТО и ремонт ТС",
                "url": "dogovor_na_to_i_remont_ts"
            },
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_zch"
            }
        ]
    },
];

const DocumentList = () => {
    return (
        <div className={styles.documents}>
            <ul className={styles.documentsList}>
                {
                    documents.map(({title, slug, files}, index) => (
                        <DocumentItem key={index} slug={slug} title={title} files={files}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default DocumentList;