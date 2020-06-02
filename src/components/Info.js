import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Info.module.css';

const Info = () => {
  return (
    <div className={styles.infoSection}>
      <div className={classNames('container', styles.infoContent)}>
        <h2 className={styles.title}>Join our community</h2>
        <h3 className={styles.subtitle}>
          30-day, hassle-free money back guarantee
        </h3>
        <p className={styles.text}>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honding
          their skills.
        </p>
      </div>
    </div>
  );
};

export default Info;
