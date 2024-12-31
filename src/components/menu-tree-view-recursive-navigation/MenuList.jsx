import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list">
      {list?.length &&
        list.map((item) => <MenuItem item={item} key={item.label} />)}
    </ul>
  );
};

export default MenuList;
