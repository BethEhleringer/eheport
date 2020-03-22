
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
      <Title>Coding</Title>

     <Row>
       <Col size="lg-2 md-1 sm-12 xs-12"></Col>
       <Col size="lg-8 md-10 sm-12 xs-12">
      
<Accordian></Accordian>

        </Col>
        <Col size="lg-2 md-1 sm-12 xs-12"></Col>
        </Row>
        </Container>
    </Wrapper>
  );
}
}
export default Coding;
