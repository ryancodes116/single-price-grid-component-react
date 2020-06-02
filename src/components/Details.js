import React from 'react';
import styles from '../styles/Details.module.css';
import Subscription from './Subscription';
import Features from './Features';

const Details = () => {
  return (
    <div className={styles.detailsWrapper}>
      <Subscription />
      <Features />
    </div>
  );
};

export default Details;
