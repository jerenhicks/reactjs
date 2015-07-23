var React = require('react');
var Header = require('./components/header/header.component.js');
var Container = require('./components/container/container.component.js');

React.render(<Header />, document.getElementById('header'));
React.render(<Container />, document.getElementById('container'));
