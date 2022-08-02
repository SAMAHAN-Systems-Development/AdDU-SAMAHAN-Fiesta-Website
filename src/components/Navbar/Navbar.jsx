import styles from './Navbar.module.scss';
import { TicketsButton } from '../ComponentIndex';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

const Navbar = () => {

  const scaleUp = {
    initial: {
      transform: "scale(1)"
    },
    animate: {
      transform: "scale(1.1)"
    },
    
  }
  
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
          <motion.div
            className={styles["img_wrapper"]}
            initial="initial"
            whileHover="animate"
            variants={scaleUp}
          >
            <div className={styles.fiesta_logo}>
              <Link href="/">
                <Image 
                  src="/assets/sadya.png"
                  layout="fill"
                  objectFit="contain"
                  draggable="false"
                  alt='Sadya 2022 Logo'
                  priority
                />
              </Link>
            </div>
          </motion.div>
            <div className={styles.tickets_btn}>
              <TicketsButton />
            </div>
        </nav>
    </header>
  )
}

export default Navbar