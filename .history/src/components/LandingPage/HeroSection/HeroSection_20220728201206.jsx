import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import styles from "./HeroSection.module.scss";
import NowHappening from "./NowHappening/NowHappening";

const HeroSection = () => {
  return (
    <div className={styles["section"]}>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/addu-logo.png"
              alt="AdDU Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["two"]}`}>
          <div className={styles['video-container']}>
            {/* <video 
            src={'https://ak.picdn.net/shutterstock/videos/1046439025/preview/stock-footage-puerto-vallarta-jalisco-mexico-january-traditional-folklore-dance-with-beautiful.webm'}
            autoPlay
            loop
            muted
            /> */}
            <ReactPlayer 
              url="https://fb.watch/eydERL7K5-/"
            />
          </div>
          <h1>SIDLAKAN s22</h1>
          <div className={styles['h1-hover']}>74th AdDU Fiesta</div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>
          <NowHappening />
        </div>
        <div className={`${styles["grid-item"]} ${styles["four"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/cheer.png"
              alt="Cheer don't jeer"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection