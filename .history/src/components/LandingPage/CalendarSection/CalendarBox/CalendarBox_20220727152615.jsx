import styles from './CalendarBox.module.scss';
import { CalendarData } from '../../../../sampleData/dataIndex';

const CalendarBox = (props, content) => {
  return (
    <div className={styles['CalendarBox']}>
        <div className={styles['container']}>
          <div className={styles['title']}>{props.title}</div>
          <div className={styles['content']}>
            <CalendarData text={content.text}/>
            console.log(content.text);
          </div>
        </div>
    </div>
  )
}

export default CalendarBox