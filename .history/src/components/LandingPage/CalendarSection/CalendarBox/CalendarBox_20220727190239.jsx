import React from 'react';
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';
import CalendarSection from '../CalendarSection';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      {CalendarSection.contents.content.map((item) => {
            return (
              <React.Fragment key={item.id}>         
                <div className={styles['content']}>
                  {item.content}
                </div>
              </React.Fragment>
              );
            })}
    </div>
  )
}

export default CalendarBox