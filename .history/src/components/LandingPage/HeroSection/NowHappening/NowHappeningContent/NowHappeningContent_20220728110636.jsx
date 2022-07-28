import React from "react";

import styles from "./NowHappeningContent.module.scss";
import CHData from "../../../../../sampleData/currentlyHappening.json";

const NowHappeningContent=()=>{
    return(
        <div>
            <div className={styles["details"]}>
                <h4>{time}</h4>
                <h2>{event}</h2>
                <h3>{platform}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NowHappeningContent;