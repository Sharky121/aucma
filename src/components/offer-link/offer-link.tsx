import styles from './styles.module.scss';

const OfferLink = () => {
    return (
        <a className={styles.offerLink} href="/offer">
            <h4>Специальное <br /> предложение <br /> на сцепку</h4>
            <strong className={styles.offerLinkProfit}>Выгода до 2 000 000 &#8381;</strong>
            <span>FAW J7 4х2 2024г. + <br /> Полуприцеп AUCMA</span>

            <svg className={styles.offerLinkIcon} viewBox="0 0 22 22" width="50" height="50" aria-hidden="true" focusable="false">
                <use xlinkHref="#ico-arrow-right-top" x="0" y="0"></use>
            </svg>
            
            <p className={styles.offerLinkNote}>Предложение <br /> действует до <b>01.06.2025</b></p>
        </a>
    )
}

export default OfferLink;