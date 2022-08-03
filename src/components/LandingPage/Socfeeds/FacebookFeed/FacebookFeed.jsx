import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import styles from './FacebookFeed.module.scss'
import {useMediaQuery} from '@mui/material';
export default function FacebookFeed(){
  
  const matches = useMediaQuery('(min-width:600px)');
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
