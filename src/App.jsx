import "./App.css";
<<<<<<< HEAD
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import MenuTreeViewRecursiveNavigation from "./components/menu-tree-view-recursive-navigation/MenuTreeViewRecursiveNavigation";
import { sideMenu } from "./components/menu-tree-view-recursive-navigation/data";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import ThemeLightAndDarkMode from "./components/theme-light-and-dark-mode/ThemeLightAndDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabsParent from "./components/tabs/TabsParent";
import ModalPopupParent from "./components/modal-popup/ModalPopupParent";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutocomplete from "./components/search-autocomplete-with-api/SearchAutocomplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlags from "./components/feature-flags/FeatureFlags";
import FeatureFlagsGlobalState from "./components/feature-flags/context/FeatureFlagsContext";
import UseFetchHookTest from "./components/use-fetch-custom-hook/UseFetchHookTest";
import UseOnclickOutsideTest from "./components/use-onclick-outside/UseOnclickOutsideTest";
import UseResponsiveTest from "./components/use-responsive-custom-hook/UseResponsiveTest";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom";
import ScrollToSection from "./components/scroll-to-section/ScrollToSection";
import Weather from "./components/weather-app/Weather";
=======
import FoodRecipeApp from "./components/food-recipe-app/FoodRecipeApp";
>>>>>>> food-recipe-app

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="10" />
      <LoadMoreData />
      <MenuTreeViewRecursiveNavigation sideMenu={sideMenu} />
      <QRCodeGenerator />
      <ThemeLightAndDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabsParent />
      <ModalPopupParent />
      <GithubProfileFinder />
      <SearchAutocomplete />
      <TicTacToe />
      {/* <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState> */}
      <UseFetchHookTest />
      <UseOnclickOutsideTest />
      <UseResponsiveTest />
      <ScrollToTopAndBottom />
      <ScrollToSection />
      <Weather />
=======
      <FoodRecipeApp />
>>>>>>> food-recipe-app
    </div>
  );
}

export default App;
