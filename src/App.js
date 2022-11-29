import './App.css';
import React, { useState } from 'react';



function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">

      <p className="count">Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>0</button>

    </div>
  )
};

export default App;
