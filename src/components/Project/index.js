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
      <div className="content">
        <h6>{props.title}</h6>
          <ul><li><a href={props.link} target="_blank" rel="noopener roreferrer nofollow">Deployed site</a></li></ul>
          <ul><li><a href={props.link} target="_blank" rel="noopener roreferrer nofollow">Git-Hub Repository</a></li></ul>

                  
      </div>
      </Col>
      <Col size="lg-6 md-6 sm-12 xs-12">

      <div className="content">
        <ul>
          <li>
            Objective: {props.objective}
          </li>
          <li>
            Role: {props.role}
          </li>
          <li>
            Skills: {props.skills}
          </li>
          <li>
            Challenges: {props.challenges}
          </li>
          <li>
            Takeaways: {props.takeaways}
          </li>

        </ul>
      </div>
      </Col></Row></Container>
    </div>
  );
}

export default Project;
