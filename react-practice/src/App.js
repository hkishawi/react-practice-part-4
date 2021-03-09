import React from "react";
import "./App.css"
import Nav from "./components/Nav"
import Tweets from "./components/Tweets"

function App() {

  return (
    <div className='App'>
      <div className='home'>
        <h1>Hello Reactor</h1>
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default App;

