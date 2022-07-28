import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';
import CalendarContent from '../CalendarContent/CalendarContent';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      {Calendar && Calendar.events.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <CalendarBox
                  title={item.title}
                />
              </React.Fragment>
              );
            })}
    </div>
  )
}

export default CalendarBox