import React from "react";
import "./styles.css";
import Container from "./components/Container.jsx";
import SideBar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { AppWrapper } from "./components/styles.js";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <SideBar />
      <Container />
      <Footer />
    </AppWrapper>
  );
}
