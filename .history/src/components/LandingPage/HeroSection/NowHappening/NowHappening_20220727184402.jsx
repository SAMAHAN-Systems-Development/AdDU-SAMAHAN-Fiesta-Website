import styles from "./NowHappening.module.scss";
import {FilterContents} from "../../../utilities/datetime";
import NowHappeningContent from "../../../ComponentIndex";

const NowHappening=()=>{
    return(
    <>
        <div>
            <h1>Now Happening</h1>
                <NowHappeningContent/>
        </div>
    </>
    )
}
