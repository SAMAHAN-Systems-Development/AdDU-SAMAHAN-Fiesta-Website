import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      <div className={styles['content']}>
          {Calendar.events.sched && Calendar.events.sched.map((item) => {
               return(item.sched.map((perSched)=>{
                return (perSched.place)
              }))
            })
            )
          })}
        </div>
    </div>
  )
}

export default CalendarBox