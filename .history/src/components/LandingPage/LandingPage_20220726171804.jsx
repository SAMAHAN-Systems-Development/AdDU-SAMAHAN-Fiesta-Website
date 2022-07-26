import React from 'react'
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <div class={styles["grid-container"]}>
        <div className={styles["grid-item"]}>1</div>
        <div className={styles["grid-item"]}>2</div>
        <div className={styles["grid-item"]}>3</div>  
        <div className={styles["grid-item"]}>4</div>
      </div>
    </div>
  )
}

export default LandingPage