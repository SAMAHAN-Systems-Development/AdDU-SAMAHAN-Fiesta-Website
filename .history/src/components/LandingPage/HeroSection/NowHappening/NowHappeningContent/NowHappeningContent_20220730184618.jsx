import { useEffect } from "react";
import styles from "./NowHappeningContent.module.scss";

const NowHappeningContent = ({ time, event, platform, item})=>{

    useEffect(() => {
        if(item == undefined){
            console.log('hatdog')
        }
    })

    return(
        <div>
            <div className={styles["details"]}>
                <h4>{time}</h4>
                <h2>{event}</h2>
                <h3>{platform}</h3>
            </div>
        </div>
    )
}

export default NowHappeningContent;