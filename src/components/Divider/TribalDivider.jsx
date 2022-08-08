import React from 'react'
import styles from '../Divider/TribalDivider.module.scss';
import Image from "next/image";

const TribalDivider = () => {
  return (
    <div className={styles['img-wrapper']}>
        <Image
            src="/assets/Tribal.png" 
            alt=""
            layout='fill'
            objectFit='cover'
            priority
        />
    </div>
  )
}

export default TribalDivider

