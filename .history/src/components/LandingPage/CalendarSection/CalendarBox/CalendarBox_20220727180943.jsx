import styles from '../../CalendarBox/CalendarBox.module.scss';
import Calendar from '../../../sampleData/calendarData.json'

const CalendarBox = ({title}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      {Calendar && Calendar.map((item, i) => {
            return (
              <React.Fragment key={item.id}>         
                <div className={styles['content']}>
                  {item.content[i]}
                </div>
              </React.Fragment>
              );
            })}
    </div>
  )
}

export default CalendarBox