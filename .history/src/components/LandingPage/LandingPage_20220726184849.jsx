import React from 'react'
import Image from 'next/image'
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <div class={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
        <Image
          src={"/public/image 12.jpg"}
          alt={"AdDU Logo"}
          layout='fill'
          priority
        />
          <h1>LOGO</h1>
        </div>
        <div className={`${styles["grid-item"]} ${styles["two"]}`}><h1>SIDLAKAN 22</h1>></div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>Vas Happenin'?</div>  
        <div className={`${styles["grid-item"]} ${styles["four"]}`}>CHEER DONT JEER</div>
      </div>
    </div>
  )
}

export default LandingPage