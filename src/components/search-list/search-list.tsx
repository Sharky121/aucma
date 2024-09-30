'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import style from './style.module.scss';

const PagesMap = {
    '/about': 'О нас',
    '/offer': 'Специальное предложение',
    '/buy': 'Покупка',
    '/service': 'Сервис',
    '/documents': 'Документы',
    '/media': 'Новости',
    '/contacts': 'Контакты'
}

const SearchList = () => {
    const [searchResults, setSearchResults] = useState([]);
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('q');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/search', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ searchTerm })
                });
    
                const data = await response.json();

                setSearchResults(data);
            } catch (error) {
                console.error('Ошибка поиска:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h3 className={style.title}>Ключевое слово &quot;{searchTerm}&ldquo; найдено на страницах:</h3>
            <ol className={style.list}>
                {
                    searchResults.length > 0 
                    ? (
                        searchResults.map(({path}, index) => (
                            <li key={index + path} className={style.item}>
                                <Link className={style.link} href={path} key={index}>{PagesMap[path]}</Link>
                            </li>
                        ))
                    ) : (
                        <li className={style.item}>
                            Ничего не найдено
                        </li>
                    )
                }
            </ol>
        </>
    )
}

export default SearchList;