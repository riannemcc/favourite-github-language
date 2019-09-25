import React, { Component } from 'react';
import PropTypes from "prop-types";

class FavouriteLanguage extends Component {

    constructor(props) {
        super(props);
        this.favourite = this.favourite.bind(this);
    }

    favourite(repoLanguages){
       const languagesGrouped = repoLanguages.reduce(function (previous, item) {
            if ( item in previous ) previous[item] ++;
            else previous[item] = 1;
            return previous;
        }, {} );
        return Object.keys(languagesGrouped).reducefilter((a, b) => languagesGrouped[a] > languagesGrouped[b] ? a : b);
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