
import React, { Component }  from "react";
import Grid, {Container, Row, Col} from "../Grid";
import Wrapper from "../Wrapper";
import Project from "../Project";
import CBCprojects from "../../CBCprojects.json";
// NEED TO HAVE BUTTONS TO SELECT VALUE FOR var abcdefg

//var cat;
class Work extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    CBCprojects
  };


render() {
  return (
    <Wrapper>
    <Container>

     <Row>
       <Col size="lg-1 md-1 sm-12 xs-12"></Col>
     <Col size="lg-10 md-10 sm-12 xs-12">
      {this.state.CBCprojects.map(project =>  (
          <Project
            id={project.id}
            name={project.name}
            title={project.title}
            image={project.image}
            objective={project.objective}
            role={project.role}
            link={project.link}
            codeLink={project.codeLink}
            skills={project.skills}
            challenges={project.challenges}
            takeaways={project.takeaways}
                      
          />
        ))}
        </Col>
        <Col size="lg-1 md-1 xs-1"></Col>
        </Row>
        </Container>
    </Wrapper>
  );
}
}
export default Work;


