import styles from '../Footer/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles['section']}>
        <div className={styles['text-section']}>
        <p> Copyright © 2022 SAMAHAN</p>
        <p> Developed by <a href = "">SAMAHAN Systems Development </a> </p>
        </div>

        <div className={styles['img-section']}>
        <img> </img>
        <img> </img>
        </div>
    </div>
  )
}

export default Footer