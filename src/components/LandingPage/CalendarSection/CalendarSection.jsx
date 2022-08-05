import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../data/calendarData.json'
import CalendarModal from './CalendarModal/CalendarModal'

const CalendarSection = () => {
  return (
    <div className={styles['section']}>
        <div className={styles['calendar-container']}>
          {Calendar.events.map((item) =>{
            return(
              <div key={item.title}>
                <CalendarBox title={item.title} sched={item.sched} itemNum={item.itemNum}/>
              </div>
            )
          })}
        </div>
        <div className={styles.calendar_modal}>
          <CalendarModal />
        </div>
    </div>
  )
}

export default CalendarSection