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
            <div>
              <Image
                src="/assets/SYSDEV-Logo.png" 
                alt="SysDev Logo"
                layout='fill'
                objectFit='cover'
              />
            </div>
        </div>
    </div>
  )
}

export default Footer