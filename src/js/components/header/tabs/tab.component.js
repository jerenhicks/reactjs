var React = require('react');
var Addons = require('react/addons');

var Tab = React.createClass({
    handleOnClick: function() {
      console.log('on click going to ' + this.props.url);
    },
    render: function() {
        var cx = React.addons.classSet;
        this.classes = cx();
        return <li className={this.classes}><a href="#" onClick={this.handleOnClick}>{this.props.name}</a></li>;
    }
});

module.exports = Tab;