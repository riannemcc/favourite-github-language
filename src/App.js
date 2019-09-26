import React from "react";
import GetUserDetails from "./components/GetUserDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="gitHubLogo" src="https://img.icons8.com/material-outlined/96/000000/github.png"></img>
      <h2>What's your favourite github language?</h2>
      <GetUserDetails />
    </div>
  );
}

export default App;
