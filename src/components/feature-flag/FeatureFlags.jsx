import React, { useContext } from "react";
import ThemeLightAndDarkMode from "../theme-light-and-dark-mode/ThemeLightAndDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColor from "../random-color/RandomColor";
import Accordion from "../accordion/Accordion";
import MenuTreeViewRecursiveNavigation from "../menu-tree-view-recursive-navigation/MenuTreeViewRecursiveNavigation";
import { FeatureFlagsContext } from "./context/FeatureFlagsContext";
import { sideMenu } from "../menu-tree-view-recursive-navigation/data";
import TabsParent from "../tabs/TabsParent";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <ThemeLightAndDarkMode /> },
    { key: "showTicTacToeBoard", component: <TicTacToe /> },
    { key: "showRandomColorGenerator", component: <RandomColor /> },
    { key: "showAccordion", component: <Accordion /> },
    {
      key: "showTreeView",
      component: <MenuTreeViewRecursiveNavigation sideMenu={sideMenu} />,
    },
    {
      key: "showTabs",
      component: <TabsParent />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(
        (componentItem, index) =>
          checkEnabledFlags(componentItem.key) && (
            <div key={index}>{componentItem.component}</div>
          )
      )}
    </div>
  );
};

export default FeatureFlags;
