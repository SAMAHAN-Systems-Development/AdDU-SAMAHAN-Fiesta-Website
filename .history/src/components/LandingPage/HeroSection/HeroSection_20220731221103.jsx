import Image from "next/image";
import styles from "./HeroSection.module.scss";
import NowHappening from "./NowHappening/NowHappening";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {
  
  return (
    <div className={styles["section"]}>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/assets/addu-logo.png"
              alt="AdDU Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["two"]}`}>
          <div className={styles['video-container']}>
            <video 
            src={'/assets/vid1.mp4'}
            autoPlay
            loop
            muted
            />
          </div>
          <h1>SADYA 22</h1>
          <div className={styles['h1-hover']}>74th AdDU Fiesta</div>
        </div>
        <div className={`${styles["grid-item"]} ${styles["three"]}`}>
          <div className={styles['video-container']}>
              <video 
              src={'/assets/vid.mp4'}
              autoPlay
              loop
              controlsList="nodownload"
              muted
              />
          </div>
          <NowHappening />
        </div>
        <div className={`${styles["grid-item"]} ${styles["four"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/assets/cheer.png"
              alt="Cheer don't jeer"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
    
      </div>
      <div className={styles['carousel-container']}>
        <Carousel infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                  <div className={styles['title']}><h1>74th AdDU Fiesta</h1></div>
                  <video 
                    src={'/assets/vid1.mp4'}
                    autoPlay
                    loop
                    controlsList="nodownload"
                    muted
                    />
                </div>
                <div>
                  <NowHappening />
                  <video 
                      src={'/assets/vid.mp4'}
                      autoPlay
                      loop
                      controlsList="nodownload"
                      muted
                      />
                </div>
                <div>
                  <Image
                    src="/assets/cheer-hover.png"
                    alt="Cheer don't jeer"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
          </Carousel>
      </div>
    </div>
  )
}

export default HeroSection