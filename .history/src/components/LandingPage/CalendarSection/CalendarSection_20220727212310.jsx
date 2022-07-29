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
              <>
                <CalendarBox
                    title={item.title}
                />
                {Calendar.events.sched && Calendar.events.sched.map((item) => {
              return (
                <div key={item.title}>
                  {item.place}
                </div>
            )
          })}
              </>
              )
            })}
        </div>
    </div>
  )
}

export default CalendarSection