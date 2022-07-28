import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
// import NowHappeningContent from "./NowHappeningContent/NowHappeningContent";
import { CHData } from '../../../../data/dataIndex'


const NowHappening=()=>{

    const [CHContent] = useState(CHData.content.contents)

    return(
    <>
        <div>
            <h1>CURRENTLY</h1>
            {/* <NowHappeningContent /> */}
        </div>
    </>
)
}

export default NowHappening;