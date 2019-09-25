import React, { Component } from 'react';
import PropTypes from "prop-types";

class FavouriteLanguage extends Component {

    constructor(props) {
        super(props);
        this.favourite = this.favourite.bind(this);
    }

    favourite(repoLanguages){
        // let languagesGrouped = {};
        // return repoLanguages.map( function (a) { if (a in languagesGrouped) languagesGrouped[a] ++; else languagesGrouped[a] = 1; });
        return repoLanguages.sort((a,b) =>
        repoLanguages.filter(v => v===a).length
        - repoLanguages.filter(v => v===b).length
        ).pop();
  
    }

    render() {
        if(this.props.repoLanguages.length !== 0){
        return (
            <div className="favouriteLanguage">
                <h3>Fave language: {this.favourite(this.props.repoLanguages)}</h3>
                <h4>Number of projects in fave language: </h4>
            </div>
        );
    } else {
        return null
    }
}
}
FavouriteLanguage.propTypes = {
    repoLanguages: PropTypes.array,
    username: PropTypes.string
}

export default FavouriteLanguage;