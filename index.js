import React from "react";
import ReactDOM from "react-dom/client";

// this jsx element convert to => react element
// who is convert to react this job is taken by babel
const JSX = (
  <h1 className="head" id="heading">
    Hello from jsx
  </h1>
);

// react component

const Chaild = () => (
  <div className="chaild">
    <h1>hello jsx</h1>
  </div>
);

//this is react component
//component composition
const HeadComponent = () => (
  <div className="conatiner">
    <Chaild />
    <h1 id="heading">Hello loacl from component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent />);
