
import React, { useReducer, Component, Fragment }  from "react";
import Grid, {Container, Row, Col} from "../Grid";
import Wrapper from "../Wrapper";
import Title from "../Title";
import ProjCard from "../ProjCard";
import projects from "../../projects.json";
import Modal from "../Modal";
import Prtf from "../Prtf";
import Accordian from "../Accordian";
import posed from 'react-pose';
import data2 from '../../data2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />
const minusIcon = <FontAwesomeIcon icon={faMinusCircle} />


const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_WEB':
      return 'WEB';
    case 'SHOW_GRAPHIC':
      return 'GRAPHIC';
    default:
      throw new Error();
  }
};
/*
class Coding extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };*/
  const Coding = () => {
    const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
    //const [project, setProject] = useState(project);
    
    const handleShowAll = () => {
      dispatchFilter({ type: 'SHOW_ALL' });
    };
    const handleShowWeb = () => {
      dispatchFilter({ type: 'SHOW_WEB' });
    };
    const handleShowGraphic = () => {
      dispatchFilter({ type: 'SHOW_GRAPHIC' });
    };
  
    const filteredProjects = projects.filter(project => {
      if (filter === 'ALL') {
        return true;
      }
      if (filter === 'WEB' && project.category === "Web") {
        return true;
      }
      if (filter === 'GRAPHIC' && project.category === "Graphic") {
        return true;
      }
      return false;
    });


  return (
    <Wrapper>
    <Container>
      <Title>Coding</Title>
<Row>
    
        <div>
          <button type="button" onClick={handleShowAll}>
            Show All
          </button>
          <button type="button" onClick={handleShowWeb}>
            Show Web
          </button>
          <button type="button" onClick={handleShowGraphic}>
            Show Graphic
          </button>
        </div>
</Row>
     <Row>
       <Col size="lg-2 md-1 sm-12 xs-12"></Col>
       <Col size="lg-8 md-10 sm-12 xs-12">
      
       <Fragment>
                {data2.map(({ title, image, link, codeLink, objective, role, skills, challenges, takeaways }, i) => (
          <Fragment>
            <h3>
{title}
            </h3>
            <Content className="content" >
              <div className="content-wrapper">
              <Row>
  <Col size="lg-6 md-6 sm-12 xs-12">
              <div className="img-container">
                <img alt={title} src={image} />
              </div>
              <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href={link} target="_blank" rel="noopener roreferrer nofollow">Deployed site</a></li>
        <li className="nav-item">
          <a href={codeLink} target="_blank" rel="noopener roreferrer nofollow">Git-Hub Repository</a></li></ul>
           </Col>
           <Col size="lg-6 md-6 sm-12 xs-12">
             <ul><li>{objective}</li>
             <li>{role}</li>
             <li>{skills}</li>
             <li>{challenges}</li>
             <li>{takeaways}</li>
              </ul>
              </Col>
              </Row>
              </div>
            </Content>
          </Fragment>
        ))}
      </Fragment>

        </Col>
        <Col size="lg-2 md-1 sm-12 xs-12"></Col>
        </Row>
        </Container>
    </Wrapper>
  );
}

export default Coding;
