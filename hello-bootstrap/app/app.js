// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.

var Parent = require("./components/Parent")

ReactDOM.render(
  <Parent/>
  , document.getElementById("app"));