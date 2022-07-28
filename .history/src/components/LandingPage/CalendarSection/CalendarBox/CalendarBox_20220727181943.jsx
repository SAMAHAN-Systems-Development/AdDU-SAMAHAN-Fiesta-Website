import styles from '../CalendarBox/CalendarBox.module.scss';
import CalendarContent from '../CalendarContent/CalendarContent';

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      <CalendarContent />
    </div>
  )
}

export default CalendarBox