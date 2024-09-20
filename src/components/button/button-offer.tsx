'use client';

import {useState } from "react";
import Button from "./button";
import Modal from "../modal/modal";


import formStyles from '../../app/styles/sections/form/form.module.scss';
import checkboxStyles from '../../app/styles/sections/checkbox/checkbox.module.scss';
import Link from "next/link";

interface IButtonOffer {
    title?: string;
    customClass?: string;
}

const ButtonOffer = ({customClass, title}: IButtonOffer) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <Button text={`${title ?? 'Получить коммерческое предложение'}`} customClass={customClass} isButton type="button" onClick={() => setIsOpen(true)}/>

            {
                isOpen && (
                    <Modal title="Получить коммерческое предложение" onClose={() => setIsOpen(false)}>
                        <form action=''>
                            <ul className={formStyles.form__list}>
                                <li className={formStyles.form__item}>
                                    <label className="visually-hidden" htmlFor='name'>Имя</label>
                                    <input className={formStyles.input} placeholder='Имя' id='name' name='name' minLength={2} maxLength={12} type="text" required/>
                                </li>
                                <li className={formStyles.form__item}>
                                    <label className="visually-hidden" htmlFor='phone'>Телефон</label>
                                    <input className={formStyles.input} placeholder='Телефон' id='phone' name='phone' type="number" required/>
                                </li>
                                <li className={formStyles.form__item}>
                                    <label className="visually-hidden" htmlFor='email'>Электронная почта</label>
                                    <input className={formStyles.input} placeholder='Электронная почта' id='email' name='email' type="email" required/>
                                </li>
                            </ul>
                            <div className={formStyles.form__footer}>
                                <div className={checkboxStyles.checkbox}>
                                    <label htmlFor='confirm'>
                                        <input id='confirm' name='confirm' type='checkbox' checked/>
                                        <span>Я согласен с условиями обработки <Link href={'/politics'}>персональных данных</Link></span>
                                    </label>
                                </div>
                                <Button isButton={true} text={'Отправить'} type={'submit'}/>
                            </div>
                        </form>
                    </Modal>
                )
            }
        </>
    )
}

export default ButtonOffer;