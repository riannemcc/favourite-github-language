import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FavouriteLanguage from "./FavouriteLanguage";
import Name from "./Name";

class GetUserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      username: "",
      avatar: "",
      repoLanguages: [],
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLanguages = this.getLanguages.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toLowerCase() });
  }

  handleSubmit(event) {
    let name = this.state.value;
    let url = "https://api.github.com/users/" + name;
    let repos_url = "https://api.github.com/users/" + name + "/repos";
    alert("You searched for: " + this.state.value);
    event.preventDefault();
    axios
      .get(url)
      .then(response => {
        this.setState({
          username: response.data.name,
          avatar: response.data.avatar_url,
          value: "",
          error: false
        });
        return axios.get(repos_url);
      })
      .then(response => {
        this.setState({ repoLanguages: this.getLanguages(response.data) });
      })
      .catch(error => {
        this.setState({ error: error, value: "" });
        console.log(error);
      });
  }

  getLanguages(response) {
    return response.map(element => {
      return element.language;
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.error ? (
            <h3 className="errorMessage">Sorry, username not recognised!</h3>
          ) : null}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="nameBox"
            type="text"
            placeholder="Enter GitHub username"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
        <div>
          {this.state.username ? (
            <>
              <Name username={this.state.username} avatar={this.state.avatar} />
              <FavouriteLanguage
                repoLanguages={this.state.repoLanguages}
                username={this.state.username}
              />
            </>
          ) : null}
        </div>
      </div>
    );
  }
}
GetUserDetails.propTypes = {
  repolanguages: PropTypes.array,
  username: PropTypes.string,
  avatar: PropTypes.string
};
export default GetUserDetails;
