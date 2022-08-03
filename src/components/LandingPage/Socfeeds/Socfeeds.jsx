import React from 'react'
import TwitterFeed  from './TwitterFeed/TwitterFeed.jsx';
import FacebookFeed from './FacebookFeed/FacebookFeed.jsx';
import styles from './Socfeeds.module.scss'

import { FacebookEmbed  } from '../../ComponentIndex'

const Socfeeds = () => {
    return (
    <div className={styles["container"]}>
            <div className={styles["feed"]}>
<<<<<<< HEAD
                <FacebookFeed />
=======
                 <FacebookFeed /> 
                
>>>>>>> df66b00182dd26b00084e4165c23f50c8141012b
            </div>
            
            <div className={styles["feed"]}>
                <TwitterFeed /> 
            </div>


        </div>
    )
}

export default Socfeeds