'use client';

import styles from "./documents-list.module.scss";
import DocumentItem from "./document-item";

const documents = [
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
                "url": "dkp"
            },
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_ZCH"
            },
            {
                "title": "Договор поставки ТС",
                "url": "dogovor_postavki_TS"
            }
        ]
    },
    {
        "title": "Дилеру",
        "slug": "dealer",
        "files": [
            {
                "title": "Гарантийное соглашение",
                "url": "garantijnoe_soglashenie"
            },
            {
                "title": "Дилерский договор",
                "url": "dilerskij_dogovor"
            },
            {
                "title": "Договор на ТО и ремонт ТС",
                "url": "dogovor_na_TO_i_remont_TS"
            },
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_ZCH"
            },
            {
                "title": "Приложение 1 к гарантийному соглашению",
                "url": "prilozhenie_1_k_garantijnomu_soglasheniyu"
            },
            {
                "title": "Приложение 2 к гарантийному соглашению",
                "url": "prilozhenie_2_k_garantijnomu_soglasheniyu"
            }
        ]
    },
    {
        "title": "СТО",
        "slug": "cto",
        "files": [
            {
                "title": "Договор на ТО и ремонт ТС",
                "url": "dogovor_na_TO_i_remont_TS"
            },
            {
                "title": "Договор поставки ЗЧ",
                "url": "dogovor_postavki_ZCH"
            }
        ]
    },
    {
        "title": "Каталоги и инструкции",
        "slug": "catalog",
        "files": [
            {
                "title": "Каталог оси SAF Module",
                "url": "katalog_osi_SAF_Module"
            },
            {
                "title": "Опорное устройство 9_LT-LG400-01 JOST Eng",
                "url": "opornoe_ustrojstvo_9_LT-LG400-01_JOST_Eng"
            },
            {
                "title": "Руководство по эксплуатации VECTOR 1550_RUS",
                "url": "rukovodstvo_po_ekspluatacii_VECTOR 1550_RUS"
            },
            {
                "title": "Руководство WABCO TEBS E",
                "url": "rukovodstvo_WABCO_TEBS_E"
            },
            {
                "title": "Список деталей оси SsI11-22K11",
                "url": "spisok_detalej_osi_SI11-22K11"
            },
            {
                "title": "SAF manual brochure",
                "url": "saf_manual_brochure"
            },
            {
                "title": "SAF mould",
                "url": "saf_mould"
            }
        ]
    }
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