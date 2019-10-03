import React, { Component } from "react";
import PropTypes from "prop-types";

class FavouriteLanguage extends Component {
  constructor(props) {
    super(props);
    this.favourite = this.favourite.bind(this);
  }

  favourite(repoLanguages) {
    const languagesGrouped = repoLanguages.reduce(function(previous, item) {
      if (item in previous) previous[item]++;
      else previous[item] = 1;
      return previous;
    }, {});

    let totalLanguages = undefined;

    Object.keys(languagesGrouped).forEach(function(x) {
      if (!totalLanguages) totalLanguages = languagesGrouped[x];
      else if (totalLanguages < languagesGrouped[x]) {
        totalLanguages = languagesGrouped[x];
      }
    });

    let favouriteLanguage = Object.keys(languagesGrouped).filter(function(x) {
      return languagesGrouped[x] == totalLanguages;
    });
    return {
      name: favouriteLanguage.join(", "),
      totalRepos: totalLanguages
    };
  }

  render() {
    const favourite = this.favourite(this.props.repoLanguages);
    if (this.props.repoLanguages.length !== 0) {
      return (
        <div className="favouriteLanguage">
          <h3> Fave language: {favourite.name} </h3>{" "}
          <h3> Total projects in fave language: {favourite.totalRepos} </h3>{" "}
        </div>
      );
    } else {
      return <h3> Fave language: None! </h3>;
    }
  }
}
FavouriteLanguage.propTypes = {
  repoLanguages: PropTypes.array,
};

export default FavouriteLanguage;
