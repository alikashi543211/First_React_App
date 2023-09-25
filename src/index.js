import React from "react";
import ReactDom from "react-dom";
// import _element from './App.js'
import App from './App.js'

// let _element = <h1>Welcome To Sahosoft Solutions</h1>
// let _element = React.createElement("h1", null, "Hello World");
// console.log(_element);

ReactDom.render(<App/>, document.getElementById('root'));