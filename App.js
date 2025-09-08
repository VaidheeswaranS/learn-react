// example - 1
/*
const heading = React.createElement('h1', {
  id: 'heading'
}, 'Hello world from React'); // this returns a React Object
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root')); // here we are telling React that under which it needs to place the content
root.render(heading); // this will take the React Object and convert it to h1 tag (mentioned above) and put it in the webpage
*/

// example - 2
const parent = React.createElement(
  "div",
  { id: "parent" },
  [ React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm a h1 tag from child"),
      React.createElement("h2", {}, "I'm a h2 tag from child")
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm a h1 tag from child2"),
      React.createElement("h2", {}, "I'm a h2 tag from child2")
    ])
  ]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);