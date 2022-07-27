import styles from './CalendarBox.module.scss';

const CalendarBox = (props) => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          <div className={styles['title']}>{props.title}</div>
          <div></div>
        </div>
    </div>
  )
}

export default CalendarBox