
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
      <Title>{pdqxyz}</Title>
      <Row><Col size="lg-3 md-2 xs-1"></Col>
        <Col size="lg-6 md-8 xs-10"><Prtf></Prtf></Col>
        <Col size="lg-3 md-2 xs-1"></Col>
      </Row>
     <Row>

      {this.state.projects.filter(project => project.category === "Graphic").map(project =>  (
          <ProjCard
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            title={project.title}
                        
          />
        ))}
        </Row>
        </Container>
    </Wrapper>
  );
}
}
export default Work;

/*const Blog = () => (
  <div>
    <h1>Blog Page</h1>
    <p>
      Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
      turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
      Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
      nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo
      laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
      lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat
      accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque vehicula sit
      amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus non ullamcorper
      iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
    </p>
  </div>
);

export default Blog;*/
