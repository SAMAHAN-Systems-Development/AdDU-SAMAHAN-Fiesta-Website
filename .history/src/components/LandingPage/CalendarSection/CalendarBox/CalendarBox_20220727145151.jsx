import styles from './CalendarBox.module.scss';

const CalendarBox = (props) => {
  return (
    <div className={styles['container']}>
          <div className={styles['title']}>{props.title}</div>
          <div className={styles['content']}>
            
          </div>
        </div>
  )
}

export default CalendarBox