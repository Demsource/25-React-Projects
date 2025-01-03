import "./App.css";
import Accordion from "./components/accordion/Accordion";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import RandomColor from "./components/random-color/RandomColor";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <GithubProfileFinder />
    </div>
  );
}

export default App;
