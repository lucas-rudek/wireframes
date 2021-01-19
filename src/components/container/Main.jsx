import React from "react";
import Widget from "./Widget.jsx";
import SubMenu from "./SubMenu.jsx";
import { MainWrapper } from "../styles.js";

export default function Main() {
  return (
    <MainWrapper>
      <SubMenu />
      <Widget />
      <Widget />
      <Widget />
    </MainWrapper>
  );
}
