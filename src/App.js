import React from "react";
import Container from "./components/Container.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
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
