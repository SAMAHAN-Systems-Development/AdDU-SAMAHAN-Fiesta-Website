import React from 'react';
import styles from '../../CalendarSection.module.scss';

const CalendarModalContent=({title,sched,itemNum})=>{
    return(
        <div>
            <div>
                <div> {/*title-itemNum*/}
                    <h4>{title}</h4>
                </div>
                <div> {/*content-itemNum*/}
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
            </div>
    )
}

export default CalendarModalContent;