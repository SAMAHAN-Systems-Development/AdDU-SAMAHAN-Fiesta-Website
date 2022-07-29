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
<<<<<<< HEAD
          <h3> SIDLAKAN </h3>
          <div className={styles['img-wrapper']}>
            <Image
              src="/assets/Smiley_Logo.png" 
              alt="Smiley Sysdev Logo"
              layout='fill'
              objectFit='contain'
            />
          </div>

          <div className={styles['img-wrapper']}>
              <Image
              src="/assets/SYSDEV_Logo.png" 
              alt="SysDev Logo"
              layout='fill'
              objectFit='contain'
            />
=======
          <div>
            <h3> SIDLAKAN </h3>
              <div className={styles['img-wrapper']}>
                <Image
                  src="/assets/SYSDEV-Logo.png" 
                  alt="SysDev Logo"
                  layout='fill'
                  objectFit='scale-down'
            
                />
              </div>
>>>>>>> 0b78e9308df60038060432728799e60b75dec812
          </div>
        </div>
    </div>
  )
}

export default Footer