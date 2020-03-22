
import React, { Component }  from "react";
import Grid, {Container, Row, Col} from "../Grid";
import Wrapper from "../Wrapper";
import Title from "../Title";
import ProjCard from "../ProjCard";
import projects from "../../projects.json";
import Modal from "../Modal";
import Prtf from "../Prtf";
import Test from "../Test";
// NEED TO HAVE BUTTONS TO SELECT VALUE FOR var abcdefg
var chosenCat = "Graphic"
//var cat;

class Blog extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };


render() {
  return (
    <Wrapper>
    <Container>
      <Title>Work</Title>

     <Row><Col size="lg-6 md-8 xs-10">
      <Test></Test>
      {this.state.projects.filter(project => project.category === chosenCat).map(project =>  (
          <ProjCard
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            category={project.category}
            title={project.title}
                        
          />
        ))}


        </Col>
        <Col size="lg-3 md-2 xs-1"></Col>
        </Row>
        </Container>
    </Wrapper>
  );
}
}
export default Blog;

/*const Blog = () => (
  <div>
    <h1>Work</h1>
    <p>
      <Prtf></Prtf>
          </p>
  </div>
);

export default Blog; */
