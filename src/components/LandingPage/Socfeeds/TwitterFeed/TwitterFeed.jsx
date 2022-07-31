import React from 'react'
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import styles from './TwitterFeed.module.scss'
const TwitterFeed = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <h1  className={styles["header"]}>Twitter</h1>
      </div>
      <div className={styles["container-1"]}>
      <TwitterTimelineEmbed
       sourceType="profile"
        screenName="CyrilOlanolan"
         options={{height: 700 ,width:500}}
         />
      </div>

    </div>
  )
}

export default TwitterFeed