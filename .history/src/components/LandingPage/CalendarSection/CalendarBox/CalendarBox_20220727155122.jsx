import styles from './CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarBox = () => {
  return (
    <div className={styles['CalendarBox']}>
        {
          Calendar && Calendar.map( calendar => {
            return (
              <div className={styles['container']}>
                <div className={styles['title']} key={calendar.title}>{calendar.title}</div>
                <div className={styles['content']}>{calendar.content}</div>
              </div>
            )
          })
        }
    </div>
  )
}

export default CalendarBox