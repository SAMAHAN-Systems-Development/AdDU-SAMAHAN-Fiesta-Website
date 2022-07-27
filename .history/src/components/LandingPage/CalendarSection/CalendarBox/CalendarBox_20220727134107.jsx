import styles from './CalendarBox.module.scss';

const CalendarBox = (props) => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          {props.title}
        </div>
    </div>
  )
}

export default CalendarBox