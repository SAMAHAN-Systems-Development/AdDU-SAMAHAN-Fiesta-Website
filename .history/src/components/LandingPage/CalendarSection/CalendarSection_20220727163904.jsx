import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {
          Calendar && Calendar.map( calendar => {
            return (
              <div className={styles['container']} key={calendar.id}>
                <div className={styles['title']}>{calendar.title}</div>
                <div className={styles['content']}>{calendar.content}</div>
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default CalendarSection