<<<<<<< HEAD
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";

function App() {
  return (
    <div className="App">
      <Accordion />
      <GithubProfileFinder />
=======
import { useState } from "react";
import "./App.css";
import RandomColor from "./conponents/random-color/RandomColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RandomColor />
>>>>>>> random-color-generator
    </div>
  );
}

export default App;
