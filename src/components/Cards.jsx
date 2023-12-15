import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";

function BasicExample({ character }) {
  return (
    <Card style={{ width: "18rem", padding: "10px" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body className="cards">
        <Card.Title>{character.name}</Card.Title>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
