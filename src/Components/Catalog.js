import React from "react";
import { Card, Button } from "react-bootstrap";
import FilmCard from "./FilmCard";

const Catalog = () => {
  return (
    <div className="catalog mt-4">
      <h4 className="catalog-title">Polecane filmy</h4>
      <div className="card-container mt-3">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </div>
  );
};

export default Catalog;
