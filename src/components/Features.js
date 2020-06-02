import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Features.module.css';

const Features = () => {
  return (
    <div className={styles.featuresSection}>
      <div className={classNames('container', styles.featuresContent)}>
        <h2 className={styles.title}>Why Us</h2>
        <ul>
          <li className={styles.listItem}>Tutorials by industry experts</li>
          <li className={styles.listItem}>Peer & expert code review</li>
          <li className={styles.listItem}>Coding exercises</li>
          <li className={styles.listItem}>Access to our GitHub repos</li>
          <li className={styles.listItem}>Community forum</li>
          <li className={styles.listItem}>Flashcard decks</li>
          <li className={styles.listItem}>New videos every week</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
