import styles from './CalendarBox.module.scss';
import data from '../../../../sampleData/calendarData.json'

const CalendarBox = (props) => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          <div className={styles['title']}>{props.title}</div>
          <div className={styles['content']}>Content Here</div>
        </div>
    </div>
  )
}

export default CalendarBox