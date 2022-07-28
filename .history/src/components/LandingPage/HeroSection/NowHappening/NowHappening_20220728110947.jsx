import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
// import NowHappeningContent from "./NowHappeningContent/NowHappeningContent";
import { CHData } from '../../../../sampleData/dataIndex'
import { NowHappeningContent } from '../ComponentIndex'


const NowHappening=()=>{

    const [CHContent] = useState(CHData.content.contents);

    useEffect(() => {
        SetCHContent(FilterContents(CHContent));
        
        const interval = setInterval(() => {
          SetCHContent(FilterContents(CHContent));
        }, 10000)
    
        return () => clearInterval(interval);
      }, [])    

    return(
    <>
        <div>
            <h1>CURRENTLY</h1>
            {/* <NowHappeningContent content={CHContent}/> */}
            {CHContent.map((item) => {
                  return (
                    <React.Fragment key={item.DateTime}>
                      <NowHappeningContent
                        time={item.DateTime}
                        event={item.event}
                        platform={item.platform}
                        description={item.desc}
                      />
                    </React.Fragment>
                  );
                })}
        </div>
    </>
)
}

export default NowHappening;