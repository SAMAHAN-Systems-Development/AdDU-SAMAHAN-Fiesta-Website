import styles from './CalendarBox.module.scss';
import Data from '../../../../sampleData/calendarData.json'

const CalendarBox = () => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          {
            Data.map( data => {
              <>
                <div className={styles['title']}>{data.title}</div>
                <div className={styles['content']}>Content Here</div>
              </>
            } )
          }
        </div>
    </div>
  )
}

export default CalendarBox