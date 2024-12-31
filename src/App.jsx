import "./App.css";
import { sideMenu } from "./components/data";
import MenuTreeViewRecursiveNavigation from "./components/MenuTreeViewRecursiveNavigation";

function App() {
  return (
    <div className="App">
      <MenuTreeViewRecursiveNavigation sideMenu={sideMenu} />
    </div>
  );
}

export default App;
