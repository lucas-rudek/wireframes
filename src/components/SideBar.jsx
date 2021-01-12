import React from "react";
import { SideBarWrapper } from "./styles.js";

export default function SideBar() {
  return (
    <SideBarWrapper>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Produtos</a>
        </li>
        <li>
          <a href="#">Missão</a>
        </li>
        <li>
          <a href="#">Links</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </SideBarWrapper>
  );
}
