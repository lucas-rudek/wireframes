import React from "react";
import { SubMenuWrapper } from "../styles.js";

export default function SubMenu() {
  return (
    <SubMenuWrapper>
      <ul>
        <li>
          <a href="#">Sub-Menu 1</a>
        </li>
        <li>
          <a href="#">Sub-Menu 2</a>
        </li>
        <li>
          <a href="#">Sub-Menu 3</a>
        </li>
      </ul>
    </SubMenuWrapper>
  );
}
