import React, {useState} from "react";
import "./App.css"

function App() {

  const [] = useState({})
  
  const incrementer = () => {
    counter += 1;
    console.log(counter)
  }

  return (
    <div className='App'>
      <div className='home'>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={incrementer}>Click</button>
      </div>
    </div>
  );
}

export default App;

