import React, {Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import styles from './FacebookFeed.module.scss'

export default class FacebookFeed extends Component {
    render() {
      return (
        <div className={styles["container"]}>
        <h1  className={styles["header"]}> Facebook </h1>
        <div className={styles["container-1"]}>
        <FacebookProvider appId="475123037773076"> 
          <Page href="https://www.facebook.com/AdDUSAMAHAN/" tabs="timeline" width='500' height='700'/>
        </FacebookProvider>    
        </div>
        </div>
      );
    }
}
