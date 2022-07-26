import React, {Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default class FacebookFeed extends Component {
    render() {
      return (
        <FacebookProvider appId="777843193336100"> 
          <Page href="https://www.facebook.com/SAMAHANSysDev" tabs="timeline" />
        </FacebookProvider>    
      );
    }
}