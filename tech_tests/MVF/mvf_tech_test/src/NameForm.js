import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        username: '',
        avatar: '',
        repos: ''
      };
     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value.toLowerCase()});
    }
  
    handleSubmit(event) {
    let name = this.state.value;
    console.log(name)
    let url = "https://api.github.com/users/" + name;
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      axios.get(url)
      .then(response => {
        console.log(response.data)
        this.setState({username: response.data.name})
        this.setState({avatar: response.data.avatar_url})
        this.setState({repos: response.data.repos_url})
        console.log(response.data.repos_url)
      })
      console.log('Success!')
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter GitHub username" value={this.state.value} onChange={this.handleChange} />
        <div className='button__container'>
          <input className='button' type="submit" value="Submit" />
          <p>{this.state.username}</p>
            <img src={this.state.avatar} alt="Profile avatar"></img>
        </div>
      
        </form>
      );
    }
  }

  export default NameForm;