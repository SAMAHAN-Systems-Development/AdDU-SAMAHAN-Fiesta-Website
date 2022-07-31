import React from 'react'
import TwitterFeed  from './TwitterFeed/TwitterFeed.jsx';
import FacebookFeed from './FacebookFeed/FacebookFeed.jsx';
import styles from './Socfeeds.module.scss'

const Socfeeds = () => {
    return (
    <div className={styles["container"]}>
            <div className={["FB-Feed"]}>
                <FacebookFeed /> gi remove sa nako para makita ang footer
            </div>
            
            <div className={["TWT-Feed"]}>
                <TwitterFeed /> 
            </div>


        </div>
    )
}

export default Socfeeds