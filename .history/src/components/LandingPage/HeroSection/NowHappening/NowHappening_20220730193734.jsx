import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
import { CHData } from '../../../../data/dataIndex';
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
            <div className={styles['content']}>
                <div className={styles['title']}>NOW HAPPENING</div>
                {CHContent.map((item) => {
                    if(item.ItemNum == undefined){
                        
                    }
                    return (
                        <React.Fragment key={item.ItemNum}>
                            <NowHappeningContent
                                time={item.DateTime}
                                event={item.event}
                                platform={item.platform}
                                num={item.ItemNum}
                            />
                        </React.Fragment>
                    );
                    })}
            </div>
        </div>
    )
}

export default NowHappening;