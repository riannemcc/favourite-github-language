import React, { Component } from 'react';
// import User from './components/user';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://api.github.com/users/riannemcc')
    .then(response => this.setState({username: response.data.name}))
    .then(response => console.log(response))
    console.log('Success!')
  }
  // state = {
  //   GitHubUser: []
  // }

  // credentials = json.loads(open('credentials.json').read())
  // authentication = HTTPBasicAuth(credentials['username'], credentials['password'])
  
  // componentDidMount() {
  //   fetch('https://api.github.com/users' + credentials['username'], auth = authentication)
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ GitHubUser: data })
  //   })
  //   .catch(console.log)
  // }
  render () {
  return (
    <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Enter GitHub username</button>
      <p>{this.state.username}</p>
      </div>
  );
}
}

export default App;
