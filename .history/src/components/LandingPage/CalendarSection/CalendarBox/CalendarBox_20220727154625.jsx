import styles from './CalendarBox.module.scss';
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarBox = () => {
  return (
    <div className={styles['CalendarBox']}>
        {
          Calendar.map( calendar => {
            return (
              <div className={styles['container']}>
                <div className={styles['title']}>Hello</div>
                <div className={styles['content']}>Content Here</div>
              </div>
            )
          })
        }
    </div>
  )
}

export default CalendarBox