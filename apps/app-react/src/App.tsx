import React from "react";
import ReactDOM from "react-dom";
import ReactComponent from "./components/ReactComponent";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app-react</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <h3>components:</h3>
    <ReactComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
