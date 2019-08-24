import React from "react";


function OldCatTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button
          onClick={() => props.handleCatChange("Web")}
          className={props.currentCat === "Web" ? "nav-link active" : "nav-link"}
        >
          Web
        </button>
      </li>
      <li className="nav-item">
        <button
         
         onClick={() => props.handleCatChange("Graphic")}
         className={props.currentCat === "Graphic" ? "nav-link active" : "nav-link"}
        >
          Graphic
        </button>
      </li>
      <li className="nav-item">
        <button
          
          onClick={() => props.handleCatChange("Print")}
          className={props.currentCat === "Print" ? "nav-link active" : "nav-link"}
        >
          Print
        </button>
      </li>
      <li className="nav-item">
        <button
          
          onClick={() => props.handleCatChange("All")}
          className={props.currentCat === "All" ? "nav-link active" : "nav-link"}
        >
          All
        </button>
      </li>
    </ul>
  );
}

export default OldCatTabs;
