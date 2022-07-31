import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';

const CalendarBox = ({title, sched}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
        <div className={styles['content']}>
        {sched.map((perSched, index)=>{
          return (
            <div className={styles['line']} key={index}>
              <div className={styles['element']}><h3>{perSched.activity}</h3></div>
              <div className={styles['element']}><p>{perSched.time}</p></div>
              <div className={styles['element']}><h4>{perSched.place}</h4></div>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default CalendarBox

