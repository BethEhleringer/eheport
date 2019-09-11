
import React, { Component }  from "react";
import Grid, {Container, Row, Col} from "../Grid";
import Wrapper from "../Wrapper";
import Title from "../Title";
import ProjCard from "../ProjCard";
import projects from "../../projects.json";
import Modal from "../Modal";
import Prtf from "../Prtf";
import Accordian from "../Accordian";
// NEED TO HAVE BUTTONS TO SELECT VALUE FOR var abcdefg
var chosenCat
//var cat;

class Coding extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };


render() {
  return (
    <Wrapper>
    <Container>
      <Title>Coding Projects</Title>

     <Row><Col size="lg-12 md-12 xs-11">
      
<Accordian></Accordian>

        </Col>
        
        </Row>
        </Container>
    </Wrapper>
  );
}
}
export default Coding;

/*const Blog = () => (
  <div>
    <h1>Work</h1>
    <p>
      <Prtf></Prtf>
          </p>
  </div>
);

export default Blog; */
