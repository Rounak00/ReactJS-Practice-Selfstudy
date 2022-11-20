import './App.css';
import React, { useState } from 'react'
function App() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple=React.useMemo(
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    }
  ,[item])
  return (
    <div className="App">
      <h1>Hooks in React {count}</h1>
      {newApple}
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  );
}

export default App;

{/*
 here when count button click the multiple function call but when item button clicked function again called, 
 so to solve this we use usememo which tell particular when the function should run
*/}
