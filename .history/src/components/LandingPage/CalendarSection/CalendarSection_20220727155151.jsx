import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
          <CalendarBox id={1}/>
          <CalendarBox id={2}/>
          <CalendarBox id={3}/>
        </div>
    </div>
  )
}

export default CalendarSection