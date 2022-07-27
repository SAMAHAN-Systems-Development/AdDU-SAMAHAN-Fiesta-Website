import React, { useState, useEffect } from 'react'
import Image from "next/image";
import styles from "./LandingPage.module.scss";
import { FilterContents } from "../../utilities/datetime.js";
import { NHData } from '../../data/dataIndex.js';

const LandingPage = () => {
  
  const [NHContent, SetNHContent] = useState(NHData.content.contents);

  useEffect(() => {
    SetNHContent(FilterContents(NHContent));
    
    const interval = setInterval(() => {
      SetNHContent(FilterContents(NHContent));
    }, 10000)

    return () => clearInterval(interval);
  }, [])


  return (
    <div className={styles["LandingPage"]}>
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
          <h1>SIDLAKAN 22</h1>
        </div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>
          <h1>CURRENTLY</h1>
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
  );
};

export default LandingPage;
