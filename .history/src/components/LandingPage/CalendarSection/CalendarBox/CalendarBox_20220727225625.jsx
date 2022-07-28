import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title, sched}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
        <div className={styles['content']}>
        {sched.map((perSched)=>{
          return (
            <p>
              {perSched.place}
              {perSched.time}
              {perSched.activity}
            </p>
            )
        })}
        </div>
    </div>
  )
}

export default CalendarBox

