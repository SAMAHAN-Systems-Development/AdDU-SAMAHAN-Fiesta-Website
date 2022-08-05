import { useEffect } from "react";
import styles from "./NowHappeningContent.module.scss";

const NowHappeningContent = ({ time, event, platform})=>{

    return(
        <div>
            <div className={styles["details"]}>
                <h2>{event}</h2>
                <div className={styles['lower']}>
                    <h4>{time}</h4>
                    <p>{platform}</p>
                </div>
            </div>
        </div>
    )
}

export default NowHappeningContent;