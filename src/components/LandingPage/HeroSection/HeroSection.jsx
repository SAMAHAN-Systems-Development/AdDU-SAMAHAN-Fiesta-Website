import Image from "next/image";
import styles from "./HeroSection.module.scss";
import NowHappening from "./NowHappening/NowHappening";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion"
import { TicketsButton } from "../../ComponentIndex";

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
    <div className={styles.section}>
      <div className={styles.img_wrapper}>
        <Image 
          src='/assets/Header-bg.png'
          alt='Header Background'
          layout="fill"
          objectFit="cover"
        />
          <div className={styles.title_container}>
            <div className={styles.img_wrapper}>
              <Image 
                src='/assets/header-logo.png'
                alt='Header Logo'
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.btn_container}>
              <TicketsButton />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection