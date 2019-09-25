import React, { Component } from 'react';
import './App.css';
import NameForm from './NameForm';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    // this.state = {
    //   // username: '',
    //   // avatar: '',
    //   // repos: ''
    // }
    // this.handleClick = this.handleClick.bind(this)
  }

  render () {
  return (
      <div className="FormContainer">
        <NameForm/>
      </div>  
    );
  }
}


export default App;
