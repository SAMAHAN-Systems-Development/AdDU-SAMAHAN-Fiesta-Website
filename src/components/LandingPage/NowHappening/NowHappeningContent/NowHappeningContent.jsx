import React from "react";

import styles from "./NowHappeningContent.module.scss";
import CHData from "../../../../sampleData/currentlyHappening.json";

const NowHappeningContent=()=>{
    return(
        <div>
            {CHData.content.contents.map((item)=>{
                return(
                    <React.Fragment key={item.ItemNum}>
                        {item.DateTime}
                        <br></br>
                        {item.event}
                        <br></br>
                        {item.platform}
                        <br></br>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default NowHappeningContent;