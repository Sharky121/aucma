'use client';

import { useState } from "react";
import styles from "./documents-list.module.scss";
import Link from "next/link";

interface IFile {
    title: string;
    url: string;
}

interface IDocumentItem {
    title: string;
    slug: string;
    files: IFile[]
}

const DocumentItem = ({title, files, slug}: IDocumentItem) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev =>!prev);
    }

    return (
        <>
            <li className={styles.documentsItem}>
                <div className={styles.documentsItemHeader} onClick={handleClick}>
                    <h3 className={styles.documentsItemTitle}>{title}</h3>
                </div>
                {
                    isOpen && (
                        <div className={styles.documentsItemBody}>
                            <ul className={styles.documentsFilesList}>
                                {
                                    files.map(({title, url}, index) => (
                                        <li key={index} className={styles.documentsFileItem}>
                                            <Link className={styles.documentsFile} href={`/documents/${slug}/${url}.pdf`} target="_blank">
                                                {title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </li>
        </>
    )
}

export default DocumentItem;