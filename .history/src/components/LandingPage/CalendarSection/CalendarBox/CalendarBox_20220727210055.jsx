import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
        {Calendar && Calendar.events.sched.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <div className={styles['content']}>
                  {item.sched}
                </div>
              </React.Fragment>
          );
        })}
    </div>
  )
}

export default CalendarBox