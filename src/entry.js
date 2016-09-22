require('./style.css');

var React = require('react');
var ReactDOM = require('react-dom');

var content = require('./content.js');

ReactDOM.render(<h1>Hello, world: { content }</h1>, document.getElementById('main'));