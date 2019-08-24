import React from "react";
import "./style.css";

function ProjCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.title}
          </li>
          <li>
            {props.category}
          </li>
          <li>
            {props.description}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default ProjCard;
