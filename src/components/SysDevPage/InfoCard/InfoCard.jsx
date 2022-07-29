import styles from './InfoCard.module.scss';

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
                <p>Socials</p>
            </div>
        </div>
  )
}

export default InfoCard