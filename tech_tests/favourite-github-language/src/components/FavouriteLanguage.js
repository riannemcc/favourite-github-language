import React, {
    Component
} from 'react';
import PropTypes from "prop-types";



class FavouriteLanguage extends Component {

    constructor(props) {
        super(props);
        this.favourite = this.favourite.bind(this);
    }

    favourite(repoLanguages) {
        const languagesGrouped = repoLanguages.reduce(function (previous, item) {
            if (item in previous) previous[item]++;
            else previous[item] = 1;
            return previous;
        }, {});
        let totalLanguages = undefined;
        Object.keys(languagesGrouped).forEach(function (x) {
            if (!totalLanguages)
                totalLanguages = languagesGrouped[x];
            else if (totalLanguages < languagesGrouped[x]) {
                totalLanguages = languagesGrouped[x];
            }
        });
        let favouriteLanguage = Object.keys(languagesGrouped).filter(function (x) {
            return languagesGrouped[x] == totalLanguages
        })
        return {
            name: favouriteLanguage,
            totalRepos: totalLanguages,
        }

        // return Object.keys(languagesGrouped).filter(x => {
        //     return languagesGrouped[x] == Math.max.apply(null, Object.values(languagesGrouped));
        // });
    };


    render() {
        const favourite = this.favourite(this.props.repoLanguages)
        if (this.props.repoLanguages.length !== 0) {
            return ( <
                div className = "favouriteLanguage" >
                <
                p > Fave language: {
                    favourite.name
                } < /p>  <
                p > Total projects in fave language: {
                    favourite.totalRepos
                } < /p> <
                /div>
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