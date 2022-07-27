import React from "react";

import styles from "./NowHappeningContent.module.scss";
import CHData from "../../../../sampleData/currentlyHappening.json";

const NowHappeningContent=({dateTime,event,platform})=>{
    return(
        <div>
            {CHData.content.contents.map((item)=>{
                return(
                    <React.Fragment key={item.ItemNum}>
                        dateTime={item.DateTime}
                        <br></br>
                        event={item.event}
                        <br></br>
                        platform={item.platform}
                        <br></br>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default NowHappeningContent;