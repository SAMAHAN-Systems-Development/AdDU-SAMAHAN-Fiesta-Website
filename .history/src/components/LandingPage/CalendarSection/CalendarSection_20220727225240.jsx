import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../sampleData/calendarData.json'

const CalendarSection = (sched) => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
          {Calendar.events.map((item) =>{
            return(
              <div key={item.title}>
                <CalendarBox title={item.title} perSched={sched}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default CalendarSection