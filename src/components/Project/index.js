import React from "react";
import "./style.css";
import Grid, {Container, Row, Col} from "../Grid";


function Project(props) {
  return (
    <div className="card">
        <Container>

<Row>
  <Col size="lg-6 md-6 sm-12 xs-12">

      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      </Col>
      <Col size="lg-6 md-6 sm-12 xs-12">

      <div className="content">
        <ul>
          <li>
            {props.objective}
          </li>
          <li>
            {props.role}
          </li>
          <li>
            {props.skills}
          </li>
          <li>
            {props.challenges}
          </li>
          <li>
            {props.takeways}
          </li>

        </ul>
      </div>
      </Col></Row></Container>
    </div>
  );
}

export default Project;
