import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title, place}) => {
  return (
    <div className={styles['container']}>
       {
            Calendar.events.map((item) =>{
              return(
                <div key={item.title}>
                    <div className={styles['title']}><h1>{item.title}</h1></div>
                  {item.sched.map((perSched)=>{
                    return (
                      <>
                      
                      </>
                      )
                  })}
                </div>
              )
            })
          }
      <div className={styles['content']}>
        </div>
    </div>
  )
}

export default CalendarBox