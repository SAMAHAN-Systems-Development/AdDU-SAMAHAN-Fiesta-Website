import styles from './CalendarBox.module.scss';
import Data from '../../../../sampleData/calendarData.json'

const CalendarBox = () => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          {
            Data.map( data )
          }
        </div>
    </div>
  )
}

export default CalendarBox