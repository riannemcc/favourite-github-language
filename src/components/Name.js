import React from "react";

export const Name = ({ username, avatar }) => (
  <div className="userDetails">
    <h1>{username}</h1>
    <img src={avatar} className="avatar" alt="Profile avatar"></img>
  </div>
);

