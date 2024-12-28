import { useState } from "react";
import "./App.css";
import RandomColor from "./conponents/random-color/RandomColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RandomColor />
    </div>
  );
}

export default App;
