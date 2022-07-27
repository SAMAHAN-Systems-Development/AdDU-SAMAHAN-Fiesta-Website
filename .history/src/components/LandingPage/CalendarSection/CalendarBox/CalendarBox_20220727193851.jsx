import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';
import CalendarContent from '../CalendarContent/CalendarContent';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      <div className={styles['content']}>
        {Calendar && Calendar.map(({content}}) => {
              return (
                <React.Fragment key={item.id}>
                  <CalendarBox
                    title={item.title}
                    content={item.content}
                  />
                </React.Fragment>
                );
              })}
      </div>
    </div>
  )
}

export default CalendarBox