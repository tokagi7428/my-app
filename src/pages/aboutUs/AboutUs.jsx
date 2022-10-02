import React from "react";
import { Container } from "react-bootstrap";
import "./aboutus.css";
function AboutUs() {
  return (
    <div className="mt-5">
      <Container className="pt-5">
        <h1 className="h1">About us</h1>
        <hr className="h1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui deserunt
          sint hic iusto reprehenderit fuga beatae nihil exercitationem eum
          necessitatibus quisquam expedita ut amet dolorum voluptate
          dignissimos, architecto commodi veritatis.
        </p>
        <div className="mt-5">
          <h5>Services available</h5>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;
