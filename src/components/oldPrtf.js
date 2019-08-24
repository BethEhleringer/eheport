import React, { Component } from "react";

import OldCatTabs from "./OldCatTabs";


class Prtf extends Component {
  state = {
    currentOcc: "Cashier"
  };

  handleOccChange = occ => {
    this.setState({ currentOcc: occ });
    
  }


  render() {
    return (
      <div>
        <OldCatTabs
          currentOcc={this.state.currentOcc}
          handleOccChange={this.handleOccChange}
        >
        </OldCatTabs>
        {console.log(this.state.currentOcc)}
       
      </div>
    );
  }
 

  
}

export default Prtf;
