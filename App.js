import React from "react";
import ReactDOM from "react-dom/client";

// creating <h1> using Core React
const headingCore = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using Core React🚀"
); // this returns a React Object

const heading1Element = (
  <h1 id="heading-one-element">Namaste React H1 using JSX as React Element 🚀</h1>
);

const heading2Element = (
  <h2 id="heading-two-element">Namaste React H2 using JSX as React Element 🚀</h2>
);

const heading3Element = (
  <h3 id="heading-three-element">Namaste React H3 using JSX as React Element 🚀</h3>
);

const Heading1Component = () => (
  <h1 id="heading-one-component">Namaste React H1 using JSX as React Functional Component 🚀</h1>
)

const Heading2Component = () => (
  <h2 id="heading-two-component">Namaste React H2 using JSX as React Functional Component 🚀</h2>
)

const Heading3Component = () => (
  <h3 id="heading-three-component">Namaste React H3 using JSX as React Functional Component 🚀</h3>
)

const heading = (
  <div className="title">
    {heading1Element}
    {heading2Element}
    {heading3Element}
    <Heading1Component />
    {Heading2Component()}
    <Heading3Component></Heading3Component>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);