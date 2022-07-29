import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
import { CHData } from '../../../../sampleData/dataIndex'
import { NowHappeningContent } from '../../../ComponentIndex'
import { FilterContents } from "../../../../utilities/datetime";


const NowHappening=()=>{

    const [CHContent, SetCHContent ] = useState(CHData.content.contents);

    useEffect(() => {
        SetCHContent(FilterContents(CHContent));
        
        const interval = setInterval(() => {
          SetCHContent(FilterContents(CHContent));
        }, 10000)
    
        return () => clearInterval(interval);
      }, [])    

    return(
        <div className={styles['container']}>
            {/* <h1>CURRENTLY</h1> */}
            <h4>NOW HAPPENING</h4>
            <div className={styles['content']}>
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
        </div>
    )
}

export default NowHappening;