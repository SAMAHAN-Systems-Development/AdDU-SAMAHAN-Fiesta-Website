import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';
import CalendarContent from '../CalendarContent/CalendarContent';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
        {Calendar && Calendar.events.sched.map((item) =>
          return(
            <div className={styles['content']} key={item.id}>
              { item.sched }
            </div>
        )}
    </div>
  )
}

export default CalendarBox