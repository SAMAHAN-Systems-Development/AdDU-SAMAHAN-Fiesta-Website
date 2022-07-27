import styles from '../CalendarBox/CalendarBox.module.scss';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      
    </div>
  )
}

export default CalendarBox