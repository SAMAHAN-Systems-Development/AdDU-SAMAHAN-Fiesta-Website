import styles from './CalendarBox.module.scss';

const CalendarBox = (props) => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          {props.name}
        </div>
    </div>
  )
}

export default CalendarBox