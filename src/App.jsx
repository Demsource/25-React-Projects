import "./App.css";
import Accordion from "./components/accordion/Accordion";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import MenuTreeViewRecursiveNavigation from "./components/menu-tree-view-recursive-navigation/MenuTreeViewRecursiveNavigation";
import { sideMenu } from "./components/menu-tree-view-recursive-navigation/data";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="10" />
      <LoadMoreData />
      <MenuTreeViewRecursiveNavigation sideMenu={sideMenu} />
      <QRCodeGenerator />
      <GithubProfileFinder />
    </div>
  );
}

export default App;
