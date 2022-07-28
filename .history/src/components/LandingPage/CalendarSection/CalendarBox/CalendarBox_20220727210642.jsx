import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
          {Calendar.events.sched && Calendar.events.sched.map((item) => {
              return (
                <React.Fragment key={item.title}>
                  <div className={styles['content']}>
                    {item.place}
                  </div>
                </React.Fragment>
            );
          })}
    </div>
  )
}

export default CalendarBox