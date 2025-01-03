import "./App.css";
import Accordion from "./components/accordion/Accordion";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import RandomColor from "./components/random-color/RandomColor";

function App() {
  return (
    <div className="App">
      <Accordion />
      <GithubProfileFinder />
      <RandomColor />
    </div>
  );
}

export default App;
