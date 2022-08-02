import React from 'react'
import TwitterFeed  from './TwitterFeed/TwitterFeed.jsx';
import FacebookFeed from './FacebookFeed/FacebookFeed.jsx';
import styles from './Socfeeds.module.scss'

const Socfeeds = () => {
    return (
    <div className={styles["container"]}>
            <div className={styles["ffeed"]}>
                <FacebookFeed />
            </div>
            
            <div className={styles["tfeed"]}>
                <TwitterFeed /> 
            </div>


        </div>
    )
}

export default Socfeeds