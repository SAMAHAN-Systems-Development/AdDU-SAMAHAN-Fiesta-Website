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
    <div className={styles.section}>
      <div className={styles.title_container}></div>
    </div>
  )
}

export default HeroSection