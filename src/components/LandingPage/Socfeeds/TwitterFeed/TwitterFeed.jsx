import {useEffect, useState} from 'react'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import styles from './TwitterFeed.module.scss'
import {useMediaQuery} from '@mui/material';



export default function TwitterFeed() {
  const matches = useMediaQuery('(min-width:1057px)');
  const height = matches ? 700 : 700;
  const width = matches ? 500 : 900;
  return (
 
    <div className={styles["container"]}>
      
      <div>

        <h1  className={styles["header"]}>STAY UPDATED</h1>
      </div>
      <div className={styles["container-1"]}>
      {console.log(matches)}
      
      <TwitterTimelineEmbed
       sourceType="profile"
        screenName="CyrilOlanolan"
         options={{height: height ,width:width}}
         />
         
        
      </div>

    </div>
  )
}

