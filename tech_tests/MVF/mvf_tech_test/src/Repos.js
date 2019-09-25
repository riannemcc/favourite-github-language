import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Repos extends React.Component {

    render() {
        console.log(this.props.repos)
        // if (this.props.repos.length !== 0 ) {
            return (
                <p>Hello</p>
                // this.props.repos.map(function(repo, i){
                //     return (
                //     <li key={i}>
                //         <p>{repo.full_name}</p>
                //     </li>
                //     );
                // }
                // )
            )
            
        }
    }
export default Repos;