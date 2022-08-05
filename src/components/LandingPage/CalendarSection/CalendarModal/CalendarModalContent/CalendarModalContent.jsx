import React from 'react';
import styles from './CalendarModalContent.module.scss';

const CalendarModalContent=({title,sched, itemNum})=>{
    return(
        <div className={`${styles['container']} ${styles[itemNum]}`}>
            <div className={styles.title}>{title}</div>
                <div className={styles.content}> {/*content-itemNum*/}
                {sched.map((perSched, index)=>{
                    return (
                        <div className={styles['line']} key={index}>
                            <div className={styles['element']}><h3>{perSched.activity}</h3></div>
                            <div className={styles['element']}><p>{perSched.time}</p></div>
                            <div className={styles['element']}><h4>{perSched.place}</h4></div>
                        </div>
                    )
                    })}
                </div>
        </div>
    )
}

export default CalendarModalContent;