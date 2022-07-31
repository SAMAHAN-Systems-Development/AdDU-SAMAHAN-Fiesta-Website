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
                <Icon icon={twitterFill} color="#010a30" />
                <Icon icon={facebookFill} color="#010a30" />
                <Icon icon={instagramFill} color="#010a30" />
                <Icon icon={githubFill} color="#010a30" />
            </div>
        </div>
  )
}

export default InfoCard