import React from 'react';
import Card from 'react-bootstrap/Card';

function CourseCard() {
  return (
    <div >
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Card.Link href="#"> Link 1</Card.Link>
          <Card.Link href="#"> Link 2</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseCard;
