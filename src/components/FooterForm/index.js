import React from "react";
import { Row, Col } from "reactstrap";
import SocialList from "../SocialList";

export default function FooterForm({ type }) {
  const firstText =
    type === "signup" ? "Already have an account" : "New on our flatform";
  const secondText =
    type === "signup" ? "Sign in instead" : "Create am account";
  return (
    <div className="footer_form">
      <span>
        {firstText}?{" "}
        <a className="link_form" href="http://www.nexlesoft.com">
          {secondText}
        </a>
      </span>
      <Row>
        <Col>
          <hr />
        </Col>
        <Col xs={1}>or</Col>
        <Col>
          <hr />
        </Col>
      </Row>
      <SocialList />
    </div>
  );
}
