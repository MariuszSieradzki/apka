import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Bar = () => {
  return (
    <div className="bar mt-4">
      <InputGroup className="mb-3">
        <FormControl placeholder="Proszę podać tytuł filmu lub nazwisko reżysera bądź aktora" />
        <Button variant="outline-primary" style={{ width: "150px" }}>
          Szukaj
        </Button>
      </InputGroup>
    </div>
  );
};

export default Bar;
