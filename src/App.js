import React, { useState } from "react";
import GetUserDetails from "./components/GetUserDetails";
import "./App.css";

function App() {
  // const [inputValue, setInputValue] = useState("")
  // const [userState, setUserState] = useState({
  //   username: "",
  //   avatar: "",
  //   repoLanguages: [],
  // })

  // const handleChange = (event) => {
  //   setInputValue(event.target.value.toLowerCase())
  // }

  return (
    <div className="App">
      <img
        className="gitHubLogo"
        src="https://img.icons8.com/material-outlined/96/000000/github.png"
      ></img>
      <h2>What's your favourite github language?</h2>
      <GetUserDetails />
      {/* {isSomething ? <div/> : <div/>}
      <button onClick={() => setIsSomething(!isSomething)}>Click</button>

      <input
        className="nameBox"
        type="text"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={handleChange}
      /> */}

    </div>
  );
}

export default App;
