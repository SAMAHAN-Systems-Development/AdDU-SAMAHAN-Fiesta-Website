import styles from './CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarBox = () => {
  return (
    <div className={styles['CalendarBox']}>
      <div className={styles['container']} key={calendar.id}>
                <div className={styles['title']}>{calendar.title}</div>
                <div className={styles['content']}>{calendar.content}</div>
              </div>
    </div>
  )
}

export default CalendarBox