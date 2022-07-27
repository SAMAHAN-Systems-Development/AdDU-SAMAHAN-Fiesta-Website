import styles from './CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarBox = () => {
  return (
    <div className={styles['CalendarBox']}>
        {
          Calendar.map( calendar => {
            return (
              <div>{calendar.title}</div>
            )
          })
        }
    </div>
  )
}

export default CalendarBox