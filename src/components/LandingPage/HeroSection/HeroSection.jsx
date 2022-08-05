import Image from "next/image";
import styles from "./HeroSection.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import { TicketsButton } from "../../ComponentIndex";

const HeroSection = () => {
  const darkenBG = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(12, 33, 131, 0.45) 67.5%)",
      transition: {
        delay: 1
      }
    }
  }

  const scale = {
    initial: {
      transform: "scale(0)",
    },
    animate: {
      transform: "scale(1)",
      transition: {
        delay: 1.5,
      },
    },
  };

  const scaleTickets = {
    initial: {
      opacity: 0,
      y: "20px"
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2
      }
    },
  }

  return (
    <div className={styles.section}>
      <div className={styles.img_wrapper}>
        <Image
          src="/assets/Header-bg.png"
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          draggable={false}
          priority
        />
        <motion.div
          className={styles.title_container}
          initial="initial"
          whileInView="animate"
          variants={darkenBG}
        >
          <motion.div
            className={styles.img_wrapper}
            variants={scale}
            whileHover={{y: "-30px"}}
          >
            <Image
              src="/assets/header-logo.png"
              alt="Header Logo"
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          </motion.div>
          <motion.div className={styles.btn_container}
          variants={scaleTickets}
          whileHover={{scale: 1.2}}
          whileTap={{scale: 1}}
          >
            <TicketsButton />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
