import React from "react";
import "./styles.css";
import Container from "./components/container/Container.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { AppWrapper } from "./components/styles.js";
import Scraper from "./components/Scraper.js";

export default function App() {
  Scraper();

  return (
    <AppWrapper>
      <Header />
      <Container />
      <Footer />
    </AppWrapper>
  );
}
