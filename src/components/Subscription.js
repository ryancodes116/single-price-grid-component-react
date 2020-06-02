import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Subscription.module.css';

const Subscription = () => {
  return (
    <div className={styles.subscriptionSection}>
      <div className={classNames('container', styles.subscriptionContent)}>
        <h2 className={styles.title}>Monthly Subscription</h2>
        <div className={styles.priceContainer}>
          <h1>$29</h1>
          <span className={styles.priceTerms}>per month</span>
        </div>
        <p className={styles.text}>Full access for less than $1 a day</p>
        <button className={styles.btn}>Sign Up</button>
      </div>
    </div>
  );
};

export default Subscription;
