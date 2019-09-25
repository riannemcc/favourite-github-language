import React, { Component } from 'react';
import './App.css';
import GetUserInformation from './components/GetUserInformation';



class App extends Component {
  constructor () {
    super()
  }

  render () {
  return (
      <div className="App">
        <h2>What's your favourite github language?</h2>
        <GetUserInformation/>
      </div>  
    );
  }
}


export default App;
