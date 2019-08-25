
import React, { Component }  from "react";
import Grid, {Container, Row, Col} from "../Grid";
import Wrapper from "../Wrapper";
import Title from "../Title";
import ProjCard from "../ProjCard";
import projects from "../../projects.json";
import Prtf from "../Prtf";
var pdqxyz = "SuperCaliFragilistic";
// NEED TO HAVE BUTTONS TO SELECT VALUE FOR var abcdefg

//var cat;
class Work extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

/*
  removeFriend = id => {
    // Filter this.state.projects for projects with an id not equal to the id being removed
    const projects = this.state.projects.filter(project => project.id !== id);
   // const projects = this.state.projects.filter(project => project.id !== id);
// Set this.state.projects equal to the new projects array
    this.setState({ projects });
  }; */
  


render() {
  return (
    <Wrapper>
    <Container>
      <Row>
      <Col size="lg-12 md-12 xs-12">
        <Title>{pdqxyz}</Title>
        </Col></Row>
      <Row>
        <Col size="lg-12 md-12 xs-12"><Prtf></Prtf>
        </Col>
              </Row>
     <Row>
       <Col size="lg-1 md-1 xs-1"></Col>
     <Col size="lg-10 md-10 xs-10">
      {this.state.projects.filter(project => project.category === "Graphic").map(project =>  (
          <ProjCard
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            title={project.title}
                        
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


