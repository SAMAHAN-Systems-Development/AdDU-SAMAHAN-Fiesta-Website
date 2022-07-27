import styles from './CalendarBox.module.scss';

const CalendarBox = ({title, content}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}><h1>{title}</h1></div>
      {Calendar && Calendar.map((item, i) => {
            return (
              <React.Fragment key={item.id}>         
                <div className={styles['content']}>
                  {itemcontent[i]}
                </div>
              </React.Fragment>
              );
            })}
    </div>
  )
}

export default CalendarBox