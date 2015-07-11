var Header = require('./components/header/header.component.js');
var Search = require('./components/container/search.component.js');

React.render(<Header />, document.getElementById('header'));
React.render(<Search />, document.getElementById('container'));
