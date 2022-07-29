import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import styles from './FacebookFeed.module.scss'


export default class FacebookFeed extends Component {
    render() {
      return (
        <div className={styles["container"]}>
        <h1  className={styles["header"]}> Facebook </h1>
        
        <FacebookProvider appId="image.png"> 
          <Page href="https://www.facebook.com/SAMAHANSysDev" tabs="timeline" width='700' height='400' small_header="true"/>
        </FacebookProvider>    
        </div>
      );
    }
}