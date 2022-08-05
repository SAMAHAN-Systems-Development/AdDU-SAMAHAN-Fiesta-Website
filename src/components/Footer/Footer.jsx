import styles from '../Footer/Footer.module.scss'
import Image from "next/image";
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import Link from 'next/link'


const Footer = () => {
  return (

    <div className={styles['section']}>
        <div className={styles['footer-left']}>
          <p> Copyright © 2022 <span><a href ="https://samahan.addu.edu.ph/"> SAMAHAN </a></span></p>
          <p> Developed by <span> <Link href = "/SystemsDevelopmentPage"> SAMAHAN Systems Development </Link></span> & <span><Link href ="https://www.facebook.com/SAMAHANCreativeTeam"> SCT</Link>  </span> </p>
          <div className={styles['icons-container']}>
            <div className={styles['icons-section-first']}>
            <a href = "https://www.facebook.com/AdDUSAMAHAN/"><Icon icon={facebookFill} color="white" height = "24"/></a>
            </div>
            <div className={styles['icons-section']}>
            <a href = "https://twitter.com/addusamahan"> <Icon icon={twitterFill} color="white" height = "24" /></a>
            </div>
            <div className={styles['icons-section']}>
            <a href = "https://www.instagram.com/samahan_ateneo/"><Icon icon={instagramFill} color="white" height = "24"/></a>
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
              draggable = 'false'
              />
          </div>
          <a href = "https://www.facebook.com/SAMAHANSysDev">
          <div className={styles['img-wrapper-2']}>
            <Image
              src="/assets/SYSDEV_Logo.png" 
              alt="SysDev Logo"
              width = '100'
              height = '100'
              objectFit='contain'
              draggable = 'false'
            />
          </div>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Footer