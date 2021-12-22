import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,alpha2Code} = props.user;

    return (
    <div style={{display: 'inline-grid', width: '300px', margin: '1px'}}>
        <Card>
  <Card.Header as="h5">Country</Card.Header>
  <Card.Body>
    
    <Link to={`/country/${name}`}>
    <Card.Title><h3>{name}</h3></Card.Title>
    </Link>
    <Card.Text>
      {alpha2Code}
    </Card.Text>
    <Button onClick={() => props.handleClick()} variant="primary">Country Details</Button>
  </Card.Body>
</Card>
    </div>

    );
};

export default Country;