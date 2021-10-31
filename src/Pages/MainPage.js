import React from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import Bar from "../Components/Bar";
import Catalog from "../Components/Catalog";

const MainPage = () => {
  return (
    <Container>
      <Header />
      <Bar />
      <Catalog />
      {/* FOOTER */}
    </Container>
  );
};

export default MainPage;
