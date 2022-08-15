import React, { Component } from 'react';
import Main from './Components/Main.js';
import { GlobalStyle } from './Style/MainStyle.js';

export default class App extends Component {
  
  render(){
    return(
      <>
        <GlobalStyle />
        <Main />
      </>
    )
  }
} 