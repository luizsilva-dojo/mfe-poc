window.React = require('react')

import React from "react";
import ReactDOM from "react-dom";

import "./remoteTypes.d";

import ReactComponent from "app_react/ReactComponent";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <ReactComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
