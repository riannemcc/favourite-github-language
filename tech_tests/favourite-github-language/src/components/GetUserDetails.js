import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../App.css';
import axios from 'axios';
import FavouriteLanguage from './FavouriteLanguage'

class GetUserDetails extends React.Component {
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
          this.setState({value: ""})
          return axios.get(repos_url);
        })
        .then(response => {
          this.setState({repoLanguages: this.getLanguages(response.data)})
        })
        .catch(error => {
          console.log(error)
        });
    }

    getLanguages(response) {
      return response.map((element) => { 
        return element.language });
    }

    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input className="nameBox" type="text" placeholder="Enter GitHub username" value={this.state.value} onChange={this.handleChange} />
                <input className="button" type="submit" value="Submit" />
            </form>
              <div className="userDetails">
                <h1>{this.state.username}</h1>
                <img src={this.state.avatar} className="avatar" alt="Profile avatar"></img>
              </div>
            <FavouriteLanguage
              repoLanguages={this.state.repoLanguages}
              username={this.state.username}
            />
        </div>
      );
    }
  }
  GetUserDetails.propTypes = {
    languages: PropTypes.array,
    username: PropTypes.string
}
  export default GetUserDetails;