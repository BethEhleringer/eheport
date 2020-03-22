import React, { useState, useEffect } from 'react';
import projects from "../../projects.json";
import CBCprojects from "../../CBCprojects.json";
import Project from "../Project";

function Test() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [chosenCat, setChosenCat] = useState('Graphic');
  //const [xyz, setXyz] = useState({ CBCprojects });
  

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});

return (
    <div>
      
      <h1>{chosenCat}</h1>
      <button onClick={() => setChosenCat('Graphic')}>
        graphic
      </button>
      <button onClick={() => setChosenCat('Web')}>
        web
      </button>
      <button onClick={() => setChosenCat('Coding')}>
        coding
      </button>


    </div>
  );
}

export default Test;
