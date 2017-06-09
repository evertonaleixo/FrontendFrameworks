import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'

import './App.css';
import Base from "./base"

class App extends Component {
  
  render() {
    return (
      
      <HashRouter>
        <Base />
      </HashRouter>
    );
  }
}

export default App;
