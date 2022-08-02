import styles from './InfoCard.module.scss';
import { Icon } from '@iconify/react';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import githubFill from '@iconify/icons-akar-icons/github-fill';

const InfoCard = ({Name, Position, Course, Email}) => {
  return (
        <div className={styles["Container"]}>
            <div className={styles["Image-Container"]}>
            </div>
            <div className={styles["Text-Container"]}>
                <h3 className={styles["Info-Name"]}>{Name}</h3>
                <h4 className={styles["Info-Pos"]}>{Position}</h4>
                <p className={styles["Info-Course"]}>{Course}</p>
                <br/>
                <p>E-mail:</p>
                <p>{Email}</p>
                <p>Socials: </p>
                <div className={styles["Icon-Container"]}>
                  <div className={styles["Icon-Section"]}>
                  <Icon icon={twitterFill} color="white" /> 
                  </div>

                  <div className={styles["Icon-Section"]}>
                  <Icon icon={facebookFill} color="white" />
                  </div>

                  <div className={styles["Icon-Section"]}>
                  <Icon icon={instagramFill} color="white" />
                  </div>

                  <div className={styles["Icon-Section"]}>
                  <Icon icon={githubFill} color="white" />
                  </div>
                </div>
            </div>
        </div>
  )
}

export default InfoCard