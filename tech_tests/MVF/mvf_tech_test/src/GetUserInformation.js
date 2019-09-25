import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Repos from './Repos'

class GetUserInformation extends React.Component {
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
    let url = "https://api.github.com/users/" + name;
    let repos_url = "https://api.github.com/users/" + name + "/repos"
      alert('You have searched for: ' + this.state.value);
      event.preventDefault();
      axios.get(url)
      .then(response => {
        this.setState({username: response.data.name})
        this.setState({avatar: response.data.avatar_url})
        return axios.get(repos_url);
      })
      .then(response => {
        this.setState({repos: response.data[0].full_name})
      })
      .catch(error => {
        console.log(error)
      });
    }
    
    render() {
      return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter GitHub username" value={this.state.value} onChange={this.handleChange} />
            <div className='button__container'>
              <input className='button' type="submit" value="Submit" />
              <p>{this.state.username}</p>
              <img src={this.state.avatar} alt="Profile avatar"></img>
              <p>{this.state.repos}</p>
            </div>
        
            </form>
        </div>
      );
    }
  }

  export default GetUserInformation;