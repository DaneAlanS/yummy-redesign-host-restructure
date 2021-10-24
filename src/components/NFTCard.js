import React from 'react';

import {Card, Button} from 'react-bootstrap';

function NFTCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            <Button variant="primary">Buy Me!</Button>
        </Card.Body>
    </Card>
  );
}

export default NFTCard;