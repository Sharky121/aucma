'use client'

import { SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';

import style from './style.module.scss';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (evt: { target: any; }) => {
        if (
            modalRef.current &&
            evt.target instanceof Element && 
            //@ts-ignore
            !modalRef.current.contains(evt.target) &&
            //@ts-ignore
            !buttonRef.current.contains(evt.target) 
          ) {
            setIsOpen(false);
          }
    };

    const handleSearchOpen = () => {
        setIsOpen(!isOpen);
    }
    
    const handleSearchChange = (evt: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(evt.target.value);
    };

    const handleSearch = () => {
        router.push(`/search?q=${searchTerm}`);
    };

    useEffect(() => {
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);

          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }
    }, [isOpen]);

    return (
        <>
            <button onClick={handleSearchOpen} ref={buttonRef}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                    <use xlinkHref="#ico-search" x="0" y="0"></use>
                </svg>
                <span className={`${isOpen ? style.danger : ''}`}>Поиск</span>
            </button>

            {
                isOpen && (
                    <div className={style.searchWrapper} ref={modalRef}>
                        <div className={style.searchField}>
                            <label className="visually-hidden" htmlFor='search'>Поиск</label>
                            <input className={style.searchInput} placeholder='Поиск' id='search' name='search' minLength={2} maxLength={60} type="text" value={searchTerm} onChange={handleSearchChange} />
        
                            <button className={style.searchButton} onClick={handleSearch}>ок</button> 
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Search;