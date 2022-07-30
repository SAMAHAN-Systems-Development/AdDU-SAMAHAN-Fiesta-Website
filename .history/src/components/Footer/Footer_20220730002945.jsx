import styles from '../Footer/Footer.module.scss'
import Image from "next/image";

const Footer = () => {
  return (

    <div className={styles['section']}>
        <div className={styles['footer-left']}>
        <p> Copyright © 2022 SAMAHAN</p>
        <p> Developed by <a href = "">SAMAHAN Systems Development </a></p>
     

        </div>

        <div className={styles['footer-right']}>
          <h3> SIDLAKAN </h3>
          <div className={styles['img-wrapper']}>
            <Image
              src="/assets/Smiley_Logo.png" 
              alt="Smiley Sysdev Logo"
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className={styles['img-wrapper']}>
              <Image
              src="/assets/SYSDEV_Logo.png" 
              alt="SysDev Logo"
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
    </div>
  )
}

export default Footer