import React from 'react'
import NavMenu from '../header/navMenu';
import styles from './footer.module.css'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.aboutAll}>
      <div className={styles.about}>
        <div className={styles.about_logo}><FontAwesomeIcon icon={faPeopleGroup} /></div>
        <div className={styles.about_numbers}>270000</div>
        <div className={styles.about_description}>Клиентов в месяц</div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_logo}><FontAwesomeIcon icon={faGlobe} /></div>
        <div className={styles.about_numbers}>31</div>
        <div className={styles.about_description}>Пиццерия в Беларуси</div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_logo}><FontAwesomeIcon icon={faHeadset} /></div>
        <div className={styles.about_numbers}>24/7</div>
        <div className={styles.about_description}>Доставляем</div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_logo}><FontAwesomeIcon icon={faClock} /></div>
        <div className={styles.about_numbers}>11:00-23:00</div>
        <div className={styles.about_description}>Время работы пиццерий</div>
      </div>
    </div>
    <div><NavMenu ></NavMenu></div>
  </footer>
)
export default Footer