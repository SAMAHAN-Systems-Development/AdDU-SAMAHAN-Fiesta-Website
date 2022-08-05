import React,{useState, useEffect} from "react";

import styles from "./NowHappening.module.scss";
import { CHData } from '../../../../data/dataIndex';
import { NowHappeningContent } from '../../../ComponentIndex'
import { FilterContents } from "../../../../utilities/datetime";


const NowHappening=()=>{

    // const [CHContent, SetCHContent ] = useState(CHData.content.contents);
    const [CHContent, SetCHContent ] = useState(FilterContents(CHData.content.contents));

    useEffect(() => {
        const interval = setInterval(() => {
            SetCHContent(FilterContents(CHContent));
        }, 10000)
        return () => clearInterval(interval);
    }, [CHContent])    

    function checkData(){
        if(CHContent.length != 0){
            return (
                CHContent.map((item) => {
                    return (
                        <React.Fragment key={item.ItemNum}>
                            <NowHappeningContent
                                time={item.DateTime}
                                event={item.event}
                                platform={item.platform}
                                num={item.Item}
                            />
                        </React.Fragment>
                    );
                    })
            )
        }else {
            return (
                <div className={styles['no-events']}>No Events.</div>
            )
        }
    }

    return(
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['details']}>
                    {checkData()}
                </div>
            </div>
        </div>
    )
}

export default NowHappening;