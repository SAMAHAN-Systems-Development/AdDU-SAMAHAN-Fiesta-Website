import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import styles from './FacebookFeed.module.scss'


export default class FacebookFeed extends Component {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

    // render() {
    //   return (
    //     <div className={styles["container"]}>
    //     <h1  className={styles["header"]}> Facebook </h1>
        
    //     <FacebookProvider appId="777843193336100"> 
    //       <Page href="https://www.facebook.com/SAMAHANSysDev" tabs="timeline" width='700' height='400' small_header="true"/>
    //     </FacebookProvider>    
    //     </div>
    //   );
    // }
}