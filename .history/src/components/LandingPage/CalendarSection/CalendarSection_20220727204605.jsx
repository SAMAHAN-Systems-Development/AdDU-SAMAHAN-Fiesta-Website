import React from 'react'
import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../sampleData/calendarData.json'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {Calendar && Calendar.events.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <CalendarBox
                  title={item.title}
                />
              </React.Fragment>
              );
            })}
            console.log{Calendar}
        </div>
    </div>
  )
}

export default CalendarSection