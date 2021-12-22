import React from "react";
import { Button, Card,ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const CountryDetailsCard = (props) => {
    console.log(props);
  const { name, population, flags, capital, translations, nativeName,demonym,region,timezones } = props.pd;
  return (
    <div>
      <Card
        style={{
          width: "28rem",
          height: "100%",
          marginLeft: "33rem",
          marginTop: "20px",
          textDecoration: "none"
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
          <ListGroupItem>Demonym :{demonym}</ListGroupItem>
          <ListGroupItem>Timezones :{timezones}</ListGroupItem>
          <ListGroupItem>Region :{region}</ListGroupItem>
          <Link to="/home"><Button><FontAwesomeIcon icon={faHome} /> Back to Home</Button></Link>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CountryDetailsCard;
