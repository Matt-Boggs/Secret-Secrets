import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Error 404</h1>
            <h1>One of us did something wrong!</h1>
            <h4>I hope it was you</h4>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
