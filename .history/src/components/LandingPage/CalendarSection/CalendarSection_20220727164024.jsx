import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {
          Calendar && Calendar.map( calendar => {
            return (
              
            )
          })
        }
        </div>
    </div>
  )
}

export default CalendarSection