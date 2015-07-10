var Parent = require('./parent');
var HelloWorld = require('./components/hello.world.component');

React.render(<Parent />, document.getElementById('app'));
React.render(<HelloWorld />, document.getElementById('helloworld'));
