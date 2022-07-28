import styles from './CalendarBox.module.scss';

const CalendarBox = ({title, content}) => {
  return (
      <div className={styles['container']}>
        <div className={styles['title']}><h1>{title}</h1></div>
          <div className={styles['content']}>
            {content}
          </div>
      </div>
    </div>
  )
}

export default CalendarBox