import React from 'react'
import TwitterFeed  from './TwitterFeed/TwitterFeed.jsx';
import FacebookFeed from './FacebookFeed/FacebookFeed.jsx';
import styles from './Socfeeds.module.scss'

const Socfeeds = () => {
    return (
    <div className={styles["container"]}>
            <div className={["FB-Feed"]}>
                {/* <FacebookFeed /> */}
            </div>
            
            <div className={["TWT-Feed"]}>
                <TwitterFeed /> 
            </div>


        </div>
    )
}

export default Socfeeds