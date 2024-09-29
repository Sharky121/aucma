'use client';

import Link from 'next/link';
import Button from '../button/button';
import Container from '../container/container';
import styles from './callback.module.scss';
import checkboxStyles from './checkbox.module.scss';
import formStyles from './form.module.scss';
import { useState } from 'react';
import SuccessModal from '../modal/success-modal';

interface IFormData {
    name: string,
    email: string,
    phone: string,
    comment: string,
    confirm: boolean;
}

const Callback = () => {
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ''
    });

    const submitForm = async (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        
        try {
            const response = await fetch('/api/info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
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

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
            <section className={styles.callback}>
                <Container customClassName={styles.callbackContainer}>
                    <div className={styles.callbackHeader}>
                        <h2 className={styles.title}>Остались вопросы?</h2>
                        <p className={styles.subtitle}>Не нашли, что искали? Оставьте свой <br /> комментарий -  мы с вами свяжемся!</p>

                        <div className={styles.callbackComment}>
                            <label className="visually-hidden" htmlFor='comment'>Комментарий</label>
                            <textarea onChange={handleInputChange} className={formStyles.textarea} value={formData.comment} name='comment' placeholder='Комментарий' />
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={submitForm}>
                        <ul className={formStyles.form__list}>
                            <li className={formStyles.form__item}>
                                <label className="visually-hidden" htmlFor='name'>Имя</label>
                                <input onChange={handleInputChange} className={formStyles.input} value={formData.name} placeholder='Имя' id='name' name='name' minLength={2} maxLength={12} type="text" required/>
                            </li>
                            <li className={formStyles.form__item}>
                                <label className="visually-hidden" htmlFor='phone'>Телефон</label>
                                <input onChange={handleInputChange} className={formStyles.input} value={formData.phone} placeholder='Телефон' id='phone' name='phone' type="phone" required/>
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
                </Container>
            </section>

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

export default Callback;