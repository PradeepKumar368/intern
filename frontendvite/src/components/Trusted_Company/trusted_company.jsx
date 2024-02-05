
import { Container, Row, Col } from 'react-bootstrap';

const Trusted_Company = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Container>
        <h6 className="text-center mb-4">Trusted by over 15,000 companies and millions of learners around the world</h6>
        <Row className="text-center">
          <Col>
            <img src="vite.svg" alt="Company Logo 1" className="img-fluid" />
          </Col>
          <Col>
            <img src="vite.svg" alt="Company Logo 2" className="img-fluid" />
          </Col>
          <Col>
            <img src="vite.svg" alt="Company Logo 3" className="img-fluid" />
          </Col>
          {/* Add more Col components for additional logos */}
        </Row>
      </Container>
    </Container>
  );
}

export default Trusted_Company;
