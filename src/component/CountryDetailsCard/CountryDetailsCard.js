import React from "react";
import { Card,ListGroup, ListGroupItem } from "react-bootstrap";

const CountryDetailsCard = (props) => {
  const { name, population, flags, capital, translations, nativeName } = props.pd;
  return (
    <div>
      <Card
        style={{
          width: "30rem",
          height: "100%",
          marginLeft: "33rem",
          marginTop: "40px",
        }}
      >
        <Card.Img variant="top" src={flags.png} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>translations: {translations.br}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Population: {population}</ListGroupItem>
          <ListGroupItem>Capital: {capital}</ListGroupItem>
          <ListGroupItem>Native Name: {nativeName}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CountryDetailsCard;
