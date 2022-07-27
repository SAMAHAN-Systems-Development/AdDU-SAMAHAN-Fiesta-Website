import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../sampleData/calendarData.json'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {Calendar.events && Calendar.events.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <CalendarBox
                  title={item.title}
                />
              </React.Fragment>
              );
            })}
        </div>
    </div>
  )
}

export default CalendarSection