import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
        <div className={styles['content']}>
          {
            Calendar.events.map((item) =>{
              <div key={item.title}>
                return(item.sched.map((perSched)=> {
                  return (perSched.place)
                }))
              </div>
            })
          }
        </div>
    </div>
  )
}

export default CalendarBox