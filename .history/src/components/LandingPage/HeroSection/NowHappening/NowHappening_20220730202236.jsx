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

    // function checkData(CHContent){
    //     if(CHContent){
    //         return (
                
    //         )
    //     }else {
    //         return (
    //             <div className={styles['no-events']}>No Events.</div>
    //         )
    //     }
    // }

    return(
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['title']}>NOW HAPPENING</div>
                    {checkData()}
            </div>
        </div>
    )
}

export default NowHappening;