import React from 'react';
import BgLeft from '../../../assets/images/header-small.png';
import styles from '../../../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img src={BgLeft} alt='background' className={styles.bgLeft} />
      <div className={styles.headerText}>
        <p>20% Safe On Your First Account</p>
        <div className={styles.newbie}>
          <div>NEWBIE20</div>
          <div>Copy Code</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
