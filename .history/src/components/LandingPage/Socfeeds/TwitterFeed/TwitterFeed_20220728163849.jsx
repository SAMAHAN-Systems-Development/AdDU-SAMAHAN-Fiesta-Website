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
         options={{height: 400 ,width:700}}
         />
      </div>

    </div>
  )
}

export default TwitterFeed