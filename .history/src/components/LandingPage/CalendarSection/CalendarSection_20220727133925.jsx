import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
          <CalendarBox title=""/>
          <CalendarBox title=""/>
          <CalendarBox title=""/>
        </div>
    </div>
  )
}

export default CalendarSection