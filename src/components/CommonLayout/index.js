import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function CommonLayout(props) {
  const { background, content } = props;
  return (
    <Container fluid="xs">
      <Row xs="1" md={2} style={{ height: "100vh", width: "100vw" }}>
        <Col xs={12} md={7} lg={8}>
          <div className="bg-light h-100">
            <img
              alt="This is signup"
              src={background}
              width="100%"
              height="100%"
            />
          </div>
        </Col>
        <Col xs={12} md={5} lg={4} className="my-auto">
          {content}
        </Col>
      </Row>
    </Container>
  );
}
