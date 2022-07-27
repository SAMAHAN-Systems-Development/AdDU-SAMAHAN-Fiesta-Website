import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
import NowHappeningContent from "./NowHappeningContent/NowHappeningContent";

const NowHappening=()=>{
    return(
    <>
        <div>
            <h1>CURRENTLY</h1>
            <NowHappeningContent />
        </div>
    </>
)
}

export default NowHappening;