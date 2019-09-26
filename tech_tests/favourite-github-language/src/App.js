import React from "react";
import GetUserDetails from "./components/GetUserDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>What's your favourite github language?</h2>
      <GetUserDetails />
    </div>
  );
}

export default App;
