// example - 2
import React from "react";
import ReactDOM from "react-dom/client";

// creating <h1> using Core React
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React 🚀'); // this rertuns a React Object

// create <h1> using JSX
// JSX - it is HTML like or XML like syntax
// Babel is a package that transpiles the JSX code and convert it into React code
const jsxheading = <h1 id="heading" className="heading h1">Namaste React using JSX 🚀</h1> // this returns a React Object

console.log(jsxheading); // the output will be the Object that contains props, children etc..

const root = ReactDOM.createRoot(document.getElementById("root")); // here we are telling React that under which it needs to place the content

root.render(jsxheading); // this will take the React object that was returned and convert it into HTML and place it in the place we mentioned above 