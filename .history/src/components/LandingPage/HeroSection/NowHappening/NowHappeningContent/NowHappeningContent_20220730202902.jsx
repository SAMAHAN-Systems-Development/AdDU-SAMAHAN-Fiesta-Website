import { useEffect } from "react";
import styles from "./NowHappeningContent.module.scss";

const NowHappeningContent = ({ time, event, platform, item})=>{

    return(
        <div>
            <div className={styles["details"]}>
                <h3>{time}</h3>
                <h2>{event}</h2>
                <p>{platform}</p>
            </div>
        </div>
    )
}

export default NowHappeningContent;