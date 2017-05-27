import React, { Component } from 'react';
import './App.css';
import Phonebook from './Phonebook.js'

class App extends Component {
  
  constructor() {
      super();
   }

  render() {
    return (
      <div className="App">
        <Phonebook />
      </div>
    );
  }
}

export default App;
