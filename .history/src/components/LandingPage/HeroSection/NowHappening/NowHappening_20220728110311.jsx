import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
// import NowHappeningContent from "./NowHappeningContent/NowHappeningContent";
import { CHData } from '../../../../data/dataIndex'


const NowHappening=()=>{

    const [CHContent] = useState(CHData.content.contents);

    useEffect(() => {
        SetNHContent(FilterContents(NHContent));
        
        const interval = setInterval(() => {
          SetNHContent(FilterContents(NHContent));
        }, 10000)
    
        return () => clearInterval(interval);
      }, [])
    

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