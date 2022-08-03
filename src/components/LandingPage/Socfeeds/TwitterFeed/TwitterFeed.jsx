import React from 'react'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import styles from './TwitterFeed.module.scss'
import {useMediaQuery} from '@mui/material';



export default function TwitterFeed() {
  const matches = useMediaQuery('(min-width:600px)');
  const height = matches ? 700 : 400;
  const width = matches ? 600 : 200;
  return (
 
    <div className={styles["container"]}>
      
      <div>

        <h1  className={styles["header"]}>TWITTER</h1>
      </div>
      <div className={styles["container-1"]}>
      {console.log(matches)}
      
      <TwitterTimelineEmbed
       sourceType="profile"
        screenName="CyrilOlanolan"
         options={{height: height ,width:width}}
         />
         {console.log(height)}
        
      </div>

    </div>
  )
}

