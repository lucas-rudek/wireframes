import React from "react";
import { SubMenuWrapper, SubMenuList } from "../styles.js";

export default function SubMenu() {
  return (
    <SubMenuWrapper>
      <SubMenuList>
        <li>
          <a href="#">Sub-Menu 1</a>
        </li>
        <li>
          <a href="#">Sub-Menu 2</a>
        </li>
        <li>
          <a href="#">Sub-Menu 3</a>
        </li>
        <li>
          <a href="#">Sub-Menu 4</a>
        </li>
      </SubMenuList>
    </SubMenuWrapper>
  );
}
