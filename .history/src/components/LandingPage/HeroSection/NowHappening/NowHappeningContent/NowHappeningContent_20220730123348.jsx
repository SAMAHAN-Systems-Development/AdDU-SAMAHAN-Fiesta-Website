import styles from "./NowHappeningContent.module.scss";

const NowHappeningContent = ({ time, event, platform , description })=>{
    return(
        <div>
            <div className={styles["details"]}>
                <h4>{time}</h4>
                <h2>{event}</h2>
                <h5>{platform}</h5>
            </div>
        </div>
    )
}

export default NowHappeningContent;