import React from "react";
import Widget from "./Widget.jsx";
import SubMenu from "./SubMenu.jsx";
import { MainWrapper, MainTitle } from "../styles.js";

export default function Main() {
  return (
    <MainWrapper>
      <SubMenu />
      <MainTitle>Oportunidades de Negócio</MainTitle>
      <Widget />
    </MainWrapper>
  );
}
