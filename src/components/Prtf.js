import React, { Component } from "react";
import OldCatTabs from "./OldCatTabs";
import ProjCard from "./ProjCard"
var current

class Prtf extends Component {
  state = {
    currentCat: "Print"
  };

  handleCatChange = cat => {
    this.setState({ category: "Print" });
    
  }


  render() {
    return (
      <div>
        <OldCatTabs
          currentCat={this.state.category}
          handleCatChange={this.handleCatChange}
        >
        </OldCatTabs>
        {console.log(this.state.cat)}
        <div></div>
        {/*this.state.projects.filter(project => project.category === "Print").map(project =>  (
          <ProjCard
            id={project.id}
            name={project.name}
            title={project.title}
            image={project.image}
            description={project.description}
            category={project.category}
                        
          />
        ))*/}
      </div>
     
    );
  }
 

  
}

export default Prtf;
