import React from 'react'
import { NowHappening } from '../../ComponentIndex';
import styles from "./CurrentlyHappening.module.scss";

const CurrentlyHappening = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
          <h1 className={styles.title}>CURRENTLY</h1>
          <div className={styles.divider}></div>
          <div className={styles.events}><NowHappening /></div> 
      </div>
    </div>
  )
}

export default CurrentlyHappening