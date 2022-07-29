import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';
import CalendarContent from '../CalendarContent/CalendarContent';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      <div className={styles['content']}>{content}
        {/* {Calendar && Calendar.map((item) => {
              return (
                <React.Fragment key={item.id}>         
                    <CalendarContent content={item.content} />
                </React.Fragment>
                );
              })} */}
      </div>
    </div>
  )
}

export default CalendarBox