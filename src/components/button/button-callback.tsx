'use client';

import ym from "react-yandex-metrika";

import {useState } from "react";
import Button from "./button";
import Modal from "../modal/modal";


import formStyles from '../../app/styles/sections/form/form.module.scss';
import checkboxStyles from '../../app/styles/sections/checkbox/checkbox.module.scss';
import Link from "next/link";
import SuccessModal from "../modal/success-modal";

interface IButtonOffer {
    customClass?: string
}

interface IFormData {
    name: string,
    email: string,
    message: string,
}

const ButtonCallback = ({customClass}: IButtonOffer) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const submitForm = async (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                ym('98962211','reachGoal','form');
                setIsOpen(false);
                setIsSuccessOpen(true);
            } else {
                console.log('Ошибка в try');
            }
        } catch (error) {
            console.log('Ошибка catch');
        }
    }

    const checkInputHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
            <Button text={'Обратный звонок'} customClass={customClass} isButton type="button" onClick={() => setIsOpen(true)}/>

            {
                isOpen && (
                    <Modal title="Свяжитесь со мной" onClose={() => setIsOpen(false)}>
                        <form onSubmit={submitForm}>
                            <ul className={formStyles.form__list}>
                                <li className={formStyles.form__item}>
                                    <label className="visually-hidden" htmlFor='name'>Имя</label>
                                    <input onChange={handleInputChange} className={formStyles.input} value={formData.name} placeholder='Имя' id='name' name='name' minLength={2} maxLength={12} type="text" required />
                                </li>
                                <li className={formStyles.form__item}>
                                    <label className="visually-hidden" htmlFor='phone'>Телефон</label>
                                    <input onChange={handleInputChange} className={formStyles.input} value={formData.phone} placeholder='Телефон' id='phone' name='phone' type="number" required/>
                                </li>
                                <li className={formStyles.form__item}>
                                    <label className="visually-hidden" htmlFor='email'>Электронная почта</label>
                                    <input onChange={handleInputChange} className={formStyles.input} value={formData.email} placeholder='Электронная почта' id='email' name='email' type="email" required/>
                                </li>
                            </ul>
                            <div className={formStyles.form__footer}>
                                <div className={checkboxStyles.checkbox}>
                                    <label htmlFor='confirm'>
                                    <input 
                                        id='confirm' 
                                        name='confirm'
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={checkInputHandler}/>
                                        <span>Я согласен с условиями обработки <Link href={'/politics'}>персональных данных</Link></span>
                                    </label>
                                </div>
                                <Button isButton={true} text={'Отправить'} type="submit"/>
                            </div>
                        </form>
                    </Modal>
                )
            }

            {
                isSuccessOpen && (
                    <SuccessModal title="Спасибо" onClose={() => setIsSuccessOpen(false)}>
                        <p>В ближайшее время наш менеджер свяжется с вами!</p>
                    </SuccessModal>
                )
            }
        </>
    )
}

export default ButtonCallback;