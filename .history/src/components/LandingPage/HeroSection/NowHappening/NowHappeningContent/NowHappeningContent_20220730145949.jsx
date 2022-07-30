import { useEffect } from "react";
import styles from "./NowHappeningContent.module.scss";
import { displayNone } from "../../../../../utilities/displaynone";

const NowHappeningContent = ({ time, event, platform , description })=>{

    useEffect(() => {
        return () => displayNone({time});
      }, [])    

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