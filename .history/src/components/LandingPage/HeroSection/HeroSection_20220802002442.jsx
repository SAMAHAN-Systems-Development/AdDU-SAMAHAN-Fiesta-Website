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
              src="/assets/samahan-logo-big.png"
              alt="Samahan Logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={styles['img_hover']}>
            <Image
                src="/assets/here-and-now-big.png"
                alt="Here and Now Logo"
                layout="fill"
                objectFit="cover"
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
            <div className={styles['text']}>
              <h1>SADYA 2022</h1>
              <h4>Theme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h4>
            </div>
          <div className={styles['h1-hover']}>74th Ateneo de Davao University Fiesta</div>
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
            {/* <Image
              src="/assets/cheer.png"
              alt="Cheer don't jeer"
              layout="fill"
              objectFit="cover"
              priority
            /> */}
          </div>
          <div className={styles["img_hover"]}>
            <Image
              src="/assets/cheer-hover.png"
              alt="Cheer don't jeer - hover"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
    
      </div>
      <div className={styles['carousel-container']}>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                  <div className={styles['title']}>
                    <p>74th Ateneo de Davao University Fiesta</p>
                    <h1>SADYA 2022</h1>
                    <h5>Theme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h5>
                  </div>
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
                <div>
                  <div className={styles['img-wrapper']}>
                    <div className={styles['logo-1']}>
                      <Image
                        src="/assets/samahan-white.png"
                        alt="logo 1"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                    <div className={styles['logo-2']}>
                      <Image
                        src="/assets/han-white.png"
                        alt="logo 2"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
          </Carousel>
      </div>
    </div>
  )
}

export default HeroSection