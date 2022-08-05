import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Socfeeds from '../Socfeeds/Socfeeds'
import styles from '../SocialsSection/SocialsSection.module.scss'

const SocialsSection = () => {

  const is992px = useMediaQuery("(max-width:992px)");
  return (
   <>
    <div className={styles['section']}>
      <div className={[styles["container"], "container"].join(' ')}>
        <div className={styles["image_wrapper"]}>
          {
            is992px ? (
              
              <Image 
                src="/assets/LiveFeedMedium.png"
                alt="Live Feed"
                layout="fill"
                objectFit='contain'
                draggable="false"
              />
            ) : (
              <Image 
                src="/assets/LiveFeedLarge.png"
                alt="Live Feed"
                layout="fill"
                objectFit='contain'
                draggable="false"
              />
            )
          }
        </div>
        <div className={styles["socfeeds"]}>
          <Socfeeds />
        </div>
      </div>
    </div>
   
   </>
  )
}

export default SocialsSection