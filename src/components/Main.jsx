import React from "react";
import { MainWrapper, SubMenuWrapper } from "./styles.js";

export default function Main() {
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
}
