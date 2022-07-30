import React,{useState, useEffect} from "react";
import styles from "./NowHappeningContent.module.scss";

const NowHappeningContent = ({ time, event, platform , description })=>{

    useEffect(() => {
        if(time == null) {
            console.log('hatdog')
            this.time = 'None'
        }
    }, [])

    return(
        <div>
            <div className={styles["details"]}>
                <h4>{time}</h4>
                <h2>{event}</h2>
                <h3>{platform}</h3>
                <p>{description}</p>
            </div>
            {/* <div className={styles['no-events']}>No events.</div> */}
        </div>
    )
}

export default NowHappeningContent;