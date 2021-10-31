import React from "react";
import { Card, Button } from "react-bootstrap";

const FilmCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/400/300" alt="image" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Reżyser</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Szczegóły filmu</Button>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
