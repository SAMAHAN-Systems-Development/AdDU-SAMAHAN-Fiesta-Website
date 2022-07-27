import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
          <CalendarBox name="DAY 1"/>
          <CalendarBox name="DAY 2"/>
          <CalendarBox name="DAY 3"/>
        </div>
    </div>
  )
}

export default CalendarSection