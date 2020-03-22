import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => props.handlePageChange("Blog")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>

    
      
      <li className="nav-item">
        <a
          href="#coding2"
          onClick={() => props.handlePageChange("Coding2")}
          className={props.currentPage === "Coding2" ? "nav-link active" : "nav-link"}
        >
          Coding2
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
