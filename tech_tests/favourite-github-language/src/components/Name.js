import React from "react";

class Name extends React.Component {
    constructor(props) {
      super(props);
    
      };

 render() {
    return (
    <div className="userDetails">
      <h1>{this.props.username}</h1>
      <img
        src={this.props.avatar}
        className="avatar"
        alt="Profile avatar"
      ></img>
    </div>
  );
}
}
export default Name;
