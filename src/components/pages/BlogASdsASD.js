
import React, { useState, useReducer, Component, Fragment }  from "react";
import { Col, Row, Container } from "../Grid";
import Wrapper from "../Wrapper";
import Title from "../Title";import ReactDOM from 'react-dom';

import ProjCard from "../ProjCard";
import projects from "../../projects.json";



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

const Blog = () => {
  
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
          <Title>asdfasd</Title>
          <Row>
       
       <Col size="xs-12">
     
        
          <h1>BlahB</h1>
          <p>Loremsldkfasl fjklskdf;jaslk jfdjkafds</p>
                
          <button type="button" onClick={handleShowAll}>
            Show All
          </button>
          <button type="button" onClick={handleShowWeb}>
            Show Web
          </button>
          <button type="button" onClick={handleShowGraphic}>
            Show Graphic
          </button>
        
        
     
   
{filteredProjects.map(project => (
  <ProjCard
  id={project.id}
  name={project.name}
  image={project.image}
  description={project.description}
  category={project.category}
  title={project.title}
              
/>
)

)};
      
</Col>

        </Row>
</Container>
</Wrapper>

    );


  

  }
  
export default Blog;


