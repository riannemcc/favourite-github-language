import React, { Component } from 'react';
import './App.css';
import GetUserInformation from './GetUserInformation';



class App extends Component {
  constructor () {
    super()
  //     this.state = {
  //       repos: []
  }

  render () {
  return (
      <div className="FormContainer">
        <GetUserInformation/>
      </div>  
    );
  }
}


export default App;
