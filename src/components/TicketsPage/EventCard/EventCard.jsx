import React from 'react'
import styles from './EventCard.module.scss'

const EventCard = ({color, events}) => {
  return (
    <div className={`${styles["container"]} ${styles[color]}`}>
        <div className={styles.content}>
            {events}
        </div>
    </div>
  )
}

export default EventCard