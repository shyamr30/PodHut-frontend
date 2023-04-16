import React from 'react';
import styles from './Button.module.css';

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={styles.buttons}>
    <span>{text}</span>
    <img className={styles.arrow} src="/images/arrow-forward.png" alt="logo"/>
    
  </button>
  );
};

export default Button;
