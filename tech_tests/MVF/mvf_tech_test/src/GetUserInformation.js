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
        repoLanguages: []
      };
     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getLanguages = this.getLanguages.bind(this);
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
          this.setState({repoLanguages: this.getLanguages(response.data)})
        })
        .catch(error => {
          console.log(error)
        });
    }

    getLanguages(repos) {
      return repos.map((element) => { 
        return element.language });
    }

    render() {
      console.log(this.state.repoLanguages)
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter GitHub username" value={this.state.value} onChange={this.handleChange} />
              <div className='button__container'>
                <input className='button' type="submit" value="Submit" />
                <h1>{this.state.username}</h1>
                <img src={this.state.avatar} alt="Profile avatar"></img>
                <li>{this.state.repoLanguages} </li>
              </div>
            </form>
        </div>
      );
    }
  }

  export default GetUserInformation;