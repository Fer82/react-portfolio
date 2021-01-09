import { Container, Row, Col } from "react-bootstrap";
import './style.css';
import myPhoto from "../../assets/images/granada-spain.jpg";

export default function About() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <article className="block">
            <h1 className="block-header">About Me</h1>
            <img
              className="img-fluid"
              src={myPhoto}
              alt="Fernando in Granada, Spain"
              id="about-image"
            />
            <p>
              I came to live in California 8 years ago from distant lands that
              were dominated by the Roman Empire and later by the Arabs and
              finally by the kingdom of Castile and the kingdom of Aragon.
            </p>
            <p>
              I really like nature and animals, I enjoy both every day. One of
              my favorite places is Joshua Tree here in California, the other
              place that is very special to me is San Lorenzo de El Escorial
              that is located north west in the Province of Madrid, Spain.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}