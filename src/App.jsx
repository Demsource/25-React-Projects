import "./App.css";
import Accordion from "./components/accordion/Accordion";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";

function App() {
  return (
    <div className="App">
      <Accordion />
      <GithubProfileFinder />
    </div>
  );
}

export default App;
