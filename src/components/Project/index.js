import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./style.css";

export default function Project(props) {
    return (
        <div className="parent">
        <Card className="card">
          <Card.Img variant="top" src={props.image} />
          <Card.Body className="card-body-content">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <div className="card-button">
              <a href={props.url} target="_blank"><Button variant="primary">Visit Project</Button></a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

