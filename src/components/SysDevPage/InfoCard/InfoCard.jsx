import styles from './InfoCard.module.scss';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import githubFill from '@iconify/icons-akar-icons/github-fill';
import Image from 'next/image';

const InfoCard = ({Name, Position, Course, Email, Picture, twitterLink, fbLink, instaLink, gitLink}) => {
  return (
        <div className={styles["Container"]}>
            <div className={styles["Image-Container"]}>
            <Image
            src={Picture}
            layout="fill"
            objectFit="cover"
            draggable="false"
            alt={Name + "'s Picture"}
            />
            </div>
            <div className={styles["Text-Container"]}>
                <h3 className={styles["Info-Name"]}>{Name}</h3>
                <h4 className={styles["Info-Pos"]}>{Position}</h4>
                <p className={styles["Info-Course"]}>{Course}</p>
                <br/>
                <p>E-mail:</p>
                <p>{Email}</p>
                <br/>
                <p>Socials: </p>
                <div className={styles["Icon-Container"]}>
                  <div className={styles["Icon-Section"]}>
                  <a href = {twitterLink}><Icon icon={twitterFill} color="white" height = "26"/></a>
                  </div>

                  <div className={styles["Icon-Section"]}>
                  <a href = {fbLink}><Icon icon={facebookFill} color="white" height = "26" /></a>
                  </div>

                  <div className={styles["Icon-Section"]}>
                  <a href = {instaLink}><Icon icon={instagramFill} color="white" height = "26" /></a>
                  </div>

                  <div className={styles["Icon-Section"]}>
                  <a href = {gitLink}><Icon icon={githubFill} color="white" height = "26" /></a>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default InfoCard