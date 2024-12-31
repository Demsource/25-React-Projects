import React from "react";
import MenuList from "./MenuList";
import "./MenuTreeViewRecursiveNavigation.css";

const MenuTreeViewRecursiveNavigation = ({ sideMenu = [] }) => {
  return (
    <div className="menu-tree-view-recursive-navigation">
      <MenuList list={sideMenu} />
    </div>
  );
};

export default MenuTreeViewRecursiveNavigation;
