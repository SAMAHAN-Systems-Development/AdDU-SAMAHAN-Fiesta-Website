import styles from '../CalendarSection/CalendarSection.module.scss'
import CalendarBox from './CalendarBox/CalendarBox'
import Calendar from '../../../../sampleData/calendarData.json'

const CalendarSection = () => {
  return (
    <div className={styles['CalendarSection']}>
        <div className={styles['calendar-container']}>
        {Calendar.map( calendar => {
            return (
              <React.Fragment key={calendar.id}>
                <CalendarBox
                  title={calendar.title}
                  content={calendar.content}
                />
              </React.Fragment>
            );
          })}
        </div>
    </div>
  )
}

export default CalendarSection