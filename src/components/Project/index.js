import React from "react";
import "./style.css";
import Grid, {Container, Row, Col} from "../Grid";


function Project(props) {
  return (
    <div className="card">
        <Container>

<Row>
  <Col size="lg-4 md-6 sm-12 xs-12">

      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
                <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href={props.link} target="_blank" rel="noopener roreferrer nofollow">Deployed site</a></li>
        <li className="nav-item">
          <a href={props.link} target="_blank" rel="noopener roreferrer nofollow">Git-Hub Repository</a></li></ul>

                  
      </div>
      </Col>
      <Col size="lg-8 md-6 sm-12 xs-12">

      <div className="content">
        <h5>{props.title}</h5>
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
