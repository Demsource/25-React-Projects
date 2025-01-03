import "./App.css";
import { sideMenu } from "./components/menu-tree-view-recursive-navigation/data";
import MenuTreeViewRecursiveNavigation from "./components/menu-tree-view-recursive-navigation/MenuTreeViewRecursiveNavigation";

function App() {
  return (
    <div className="App">
      <MenuTreeViewRecursiveNavigation sideMenu={sideMenu} />
    </div>
  );
}

export default App;
