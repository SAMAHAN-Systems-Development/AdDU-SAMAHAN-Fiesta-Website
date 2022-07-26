import React from 'react'
import Image from 'next/image'
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <div class={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
            <Image
              src={"/addu-logo.png"}
              alt={"AdDU Logo"}
              layout={'fill'}
              objectFit={'contain'}
              margin={'auto'}
              padding={'auto'}
              priority
            />
        </div>
        <div className={`${styles["grid-item"]} ${styles["two"]}`}><h1>SIDLAKAN 22</h1></div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}><h1>Vas Happenin'?</h1></div>  
        <div className={`${styles["grid-item"]} ${styles["four"]}`}><h1>CHEER DONT JEER</h1></div>
      </div>
    </div>
  )
}

export default LandingPage