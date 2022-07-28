import React from 'react'
import styles from '../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json';

const CalendarBox = ({title, place}) => {
  return (
    <>
      {Calendar.events.map((item) =>{
        <div className={styles['container']}>
              return(
                <div key={item.title}>
                    <div className={styles['title']}><h1>{item.title}</h1></div>
                  {item.sched.map((perSched)=>{
                    return (
                      <>
                        <div className={styles['content']}>{perSched.place}</div>
                        <div className={styles['content']}>{perSched.time}</div>
                        <div className={styles['content']}>{perSched.activtiy}</div>
                      </>
                      )
                  })}
                </div>
              )
            })
        </div>
      }
    </>
  )
}

export default CalendarBox