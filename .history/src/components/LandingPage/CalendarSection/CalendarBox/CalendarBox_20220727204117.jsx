import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';
import CalendarContent from '../CalendarContent/CalendarContent';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      <div className={styles['content']}>
        {Calendar && Calendar.events.map(({item}) => {
              return (
                <React.Fragment key={item.title}>
                  <CalendarContent
                    content={item.sched.sched}
                  />
                </React.Fragment>
                );
              })}
      </div>
    </div>
  )
}

export default CalendarBox