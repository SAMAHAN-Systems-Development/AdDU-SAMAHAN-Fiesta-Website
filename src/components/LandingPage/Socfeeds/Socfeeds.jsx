import React from 'react'
import TwitterFeed  from './TwitterFeed/TwitterFeed.jsx';
import FacebookFeed from './FacebookFeed/FacebookFeed.jsx';
//import { FacebookFeed } from './ComponentIndex';


const Socfeeds = () => {
    return (
        <div>
            Socfeeds
            <TwitterFeed /> 
            <FacebookFeed />
        </div>
    )
}

export default Socfeeds