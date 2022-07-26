import React from 'react'
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <div class={styles["grid-container"]}>
        <div className={styles["grid-item"] + styles["logo"]}>Logo</div>
        <div className={styles["grid-item"]}>SIDLAKAN 2022</div>
        <div className={styles["grid-item"]}>Vas Happenin'?</div>  
        <div className={styles["grid-item"]}>CHEER DONT JEER</div>
      </div>
    </div>
  )
}

export default LandingPage