import Image from "next/image";
import styles from "./HeroSection.module.scss";
import NowHappening from "./NowHappening/NowHappening";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion"

const HeroSection = () => {

  const scaleUp = {
    initial: {
      transform: "scale(1)"
    },
    animate: {
      transform: "scale(1.2)"
    },
    
  }
  
  return (
    <div className={styles["section"]}>
      <div className={styles["grid-container"]}>
        <div className={`${styles["grid-item"]} ${styles["one"]}`}>
          <div className={styles["img_wrapper"]}>
            <Image
              src="/assets/samahan-circle.png"
              alt="Samahan Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className={styles['img_hover']}>
            <Image
                src="/assets/han-circle.png"
                alt="Here and Now Logo"
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
            controlsList="nodownload"
            />
          </div>
            <div className={styles['text']}>
              <h1>SADYA 2022</h1>
              <h4>Theme: &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;</h4>
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
          <motion.div
            className={styles["img_wrapper"]}
            initial="initial"
            whileHover="animate"
            variants={scaleUp}
          >
            <Image
              src="/assets/svg/CheerDontJeer.svg"
              alt=""
              layout="fill"
              objectFit="cover"
              draggable={false}
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className={styles['carousel-container']}>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                  <div className={styles['title']}>
                    <p>74th Ateneo de Davao University Fiesta</p>
                    <h1>SADYA 2022</h1>
                    <h5>Theme: &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;</h5>
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
                <motion.div
                  className={styles["img_wrapper"]}
                  initial="initial"
                  whileHover="animate"
                  variants={scaleUp}
                >
                  <Image
                    src="/assets/svg/CheerDontJeer.svg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    priority
                  />
                </motion.div>
                </div>
                <div>
                  <div className={styles['img-wrapper']}>
                    <Image
                          src="/assets/samahan-logo-big.png"
                          alt="samahan logo"
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                  </div>
                </div>
        </Carousel>
      </div>
    </div>
  )
}

export default HeroSection