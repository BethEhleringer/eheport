import React from "react";


function CatTabs(props) {
  return (
    <div>
    <button className="btn btn-primary"
          onClick={props.pickCook}>Cook</button>
          <button className="btn btn-primary"
          onClick={props.pickOwner}>Owner</button>
          <button className="btn btn-primary"
          onClick={props.pickCashier}>Cashier</button> 
    </div>
    
          

  );
}

export default CatTabs;
