import React from 'react';
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      {Calendar && Calendar.map((item, i, j) => {
            return (
              <React.Fragment key={item.id}>         
                <div className={styles['content']}>
                  {item.content1}
                </div>
              </React.Fragment>
              );
            })}
    </div>
  )
}

export default CalendarBox