import React from "react";
import "./styles.css";
import Container from "./components/container/Container.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { AppWrapper } from "./components/styles.js";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Container />
      <Footer />
    </AppWrapper>
  );
}
