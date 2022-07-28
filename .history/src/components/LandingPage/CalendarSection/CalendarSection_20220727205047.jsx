import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../sampleData/calendarData.json'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {Calendar && Calendar.events.map((item, i) => {
            return (
              <React.Fragment key={item.title}>
                <CalendarBox
                  title={item.title}
                  content={item.sched.place}
                />
              </React.Fragment>
              );
            })}
        </div>
    </div>
  )
}

export default CalendarSection