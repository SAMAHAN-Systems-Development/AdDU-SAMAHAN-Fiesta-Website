import React from "react";
import Image from "next/image";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles["LandingPage"]}>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
          <div className={styles["image_wrapper"]}>
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
          <h1>SIDLAKAN 22</h1>
        </div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>
          <h1>CURRENTLY</h1>
        </div>
        <div className={`${styles["grid-item"]} ${styles["four"]}`}>
          <h1>CHEER DONT JEER</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
