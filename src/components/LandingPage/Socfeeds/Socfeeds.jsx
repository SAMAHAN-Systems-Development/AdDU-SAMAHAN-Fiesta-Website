import React from 'react'
import TwitterFeed  from './TwitterFeed/TwitterFeed.jsx';
import FacebookFeed from './FacebookFeed/FacebookFeed.jsx';
import styles from './Socfeeds.module.scss'

import { FacebookEmbed  } from '../../ComponentIndex'

const Socfeeds = () => {
    return (
    <div className={styles["container"]}>
            
            
            <div className={styles["feed"]}>
                <TwitterFeed /> 
            </div>


        </div>
    )
}

export default Socfeeds