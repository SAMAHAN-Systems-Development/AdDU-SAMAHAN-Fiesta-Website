import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../sampleData/calendarData.json'
import { CHData } from '../../../data/dataIndex'

const CalendarSection = () => {
  return (
    <div className={styles['section']}>
        <div className={styles['calendar-container']}>
          {Calendar.events.map((item) =>{
            return(
              <div key={item.title}>
                <CalendarBox title={item.title} sched={item.sched}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default CalendarSection