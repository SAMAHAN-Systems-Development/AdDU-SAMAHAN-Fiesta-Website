import styles from '../Footer/Footer.module.scss'
import Image from "next/image";
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import githubFill from '@iconify/icons-akar-icons/github-fill';


const Footer = () => {
  return (

    <div className={styles['section']}>
        <div className={styles['footer-left']}>
          <p> Copyright © 2022 SAMAHAN</p>
          <p> Developed by SAMAHAN Systems Development & SCT</p>
          <div className={styles['icons-container']}>
            <div className={styles['icons-section-first']}>
            <a href = "https://www.facebook.com/SAMAHANSysDev"><Icon icon={facebookFill} color="white" height = "24"/></a>
            </div>
            <div className={styles['icons-section']}>
            <a href = "https://twitter.com/SAMAHANSysDev"> <Icon icon={twitterFill} color="white" height = "24" /></a>
            </div>
            <div className={styles['icons-section']}>
            <a href = "https://www.instagram.com/samahansysdev/"><Icon icon={instagramFill} color="white" height = "24"/></a>
            </div>
          </div>
        </div>

        <div className={styles['footer-right']}>
          <h2> SADYA 2022 </h2>
          <div className={styles['img-container']}>
          <div className={styles['img-wrapper-1']}>
            <Image
              src="/assets/Smiley_Logo.png" 
              alt="Smiley Sysdev Logo"
              width = '100'
              height = '100'
              objectFit='contain'
              />
          </div>
          <div className={styles['img-wrapper-2']}>
            <Image
              src="/assets/SYSDEV_Logo.png" 
              alt="SysDev Logo"
              width = '100'
              height = '100'
              objectFit='contain'
            />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer