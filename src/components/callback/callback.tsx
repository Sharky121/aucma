import Link from 'next/link';
import Button from '../button/button';
import Container from '../container/container';
import styles from './callback.module.scss';
import checkboxStyles from './checkbox.module.scss';
import formStyles from './form.module.scss';

const Callback = () => {
    return (
        <section className={styles.callback}>
            <Container customClassName={styles.callbackContainer}>
                <div className={styles.callbackHeader}>
                    <h2 className={styles.title}>Остались вопросы?</h2>
                    <p className={styles.subtitle}>Не нашли, что искали? Оставьте свой <br /> номер - мы позвоним и поможем!</p>
                </div>

                <form className={styles.form} action=''>
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
                                <span>Я согласен с условиями обработки <Link href={''}>персональных данных</Link></span>
                            </label>
                        </div>
                        <Button isButton={true} text={'Отправить'} type={'submit'}/>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default Callback;